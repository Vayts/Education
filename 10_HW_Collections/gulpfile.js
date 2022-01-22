const path = require('path');
const del = require('del');
const gulp = require('gulp');
const less = require('gulp-less');
// const babel = require('gulp-babel');
const debug = require('gulp-debug');
const concat = require('gulp-concat');
const copy = require('gulp-copy');
const through = require('through2');
const fileInclude = require('gulp-file-include');
const dartSass = require('sass');
const gulpSass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const { dest } = require("gulp");

const sass = gulpSass(dartSass);

const SRC = './src';
const BUILD = './build';
const PUBLIC = './public';

const paths = {
    build: {
        root: `${BUILD}/`,
        css: `${BUILD}/css/`,
        img: `${BUILD}/img/`,
        html: `${BUILD}/`,
        js: `${BUILD}/js`
    },
    src: {
        scss: `${SRC}/scss/main.scss`,
        ts: `${SRC}/ts/index.ts`,
        img: `${SRC}/img/**/*`,
        public: `${PUBLIC}/**/*`,
    },
    compileWatch: {
        scss: `${SRC}/scss/**/*.scss`,
        // js: `${SRC}/js/**/*.js`,
        ts: `${SRC}/ts/**/*.ts`,
        img: `${SRC}/img/**/*`,
        html: `${SRC}/html/*.html`,
    },
    reloadWatch: {
        css: `${BUILD}/**/*.css`,
        js: `${BUILD}/**/*.js`,
        img: `${BUILD}/img/**/*`,
        html: `${BUILD}/*.html`,
    },
};



function compileTypescript() {
    const tsProject = ts.createProject(path.resolve(process.cwd(), './tsconfig.json'));
    const project = tsProject();
    return tsProject
        .src()
        .pipe(sourcemaps.init())
        .pipe(project)
        .pipe(sourcemaps.write({
            sourceRoot: (file) => {
                const sourceFile = path.join(file.cwd, 'src', file.sourceMap.file)
                return path.relative(path.dirname(sourceFile), file.cwd)
            }
        }))
        .pipe(gulp.dest(paths.build.js))
}

const verify = () => {
    const write = (file, enc, cb) => {
        // console.log('file', file.path);
        cb(null, file);
    };

    const end = (cb) => {
        console.log('done');
        cb();
    };

    return through({ objectMode: true }, write, end);
};

// const styles = (paths, outputFilename, outputPath) => {
//     return gulp
//         .src(paths)
//         .pipe(sass().on('error', sass.logError))
//         .pipe(debug({ title: 'scss:' }))
//         .pipe(concat(outputFilename))
//         .pipe(gulp.dest(outputPath));
// };



// const scripts = (paths, outputFilename, outputPath) => {
//     return gulp
//         .src(paths)
//         .pipe(debug({ title: 'js:' }))
//         .pipe(babel({ presets: ['@babel/env'] }))
//         .pipe(concat(outputFilename))
//         .pipe(debug({ title: 'jsconcat:' }))
//         .pipe(gulp.dest(outputPath));
// };

gulp.task('clean', (cb) => {
    del.sync([paths.build.root]/*, { dot: true }*/)
    cb()
});

// gulp.task('copy', (cb) => {
//     gulp
//         .src(paths.src.public)
//         .pipe(copy(paths.build.root, { prefix: 1 }))
//         .pipe(verify());
//     cb()
// });

gulp.task('styles', (cb) => {
    styles([paths.src.scss], 'styles.css', paths.build.css);
    cb();
});

gulp.task('scripts', (cb) => {
    //  scripts([paths.src.js], 'index.js', paths.build.js, false);
    compileTypescript();
    cb();
});

// gulp.task('img', (cb) => {
//     gulp.src(paths.src.img, { since: gulp.lastRun('img') }).pipe(gulp.dest(paths.build.img));
//     cb()
// });

gulp.task('fileInclude', (cb) => {
    gulp.src([SRC + '/html/index.html'])
        .pipe(fileInclude({ prefix: '@@', basepath: '@file' }))
        .pipe(gulp.dest(BUILD));
    cb();
});

gulp.task('build', gulp.series('clean', gulp.parallel('scripts', 'fileInclude')));

gulp.task('watch', () => {
    gulp.watch(paths.compileWatch.html, gulp.series('fileInclude'));
    // gulp.watch(paths.compileWatch.scss, gulp.series('styles'));
    gulp.watch(paths.compileWatch.ts, gulp.series('scripts'));
    // gulp.watch(paths.compileWatch.img, gulp.series('img'));
});

gulp.task('serve', () => {
    browserSync.init({ server: { baseDir: './build/' } });

    browserSync.watch(paths.reloadWatch.css).on('change', browserSync.reload);
    browserSync.watch(paths.reloadWatch.js).on('change', browserSync.reload);
    browserSync.watch(paths.reloadWatch.img).on('change', browserSync.reload);
    browserSync.watch(paths.reloadWatch.html).on('change', browserSync.reload);
});

gulp.task('default', gulp.series('build', gulp.parallel('watch', 'serve')));


