const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const concat = require('gulp-concat');
const removeCode = require('gulp-remove-code');

const paths = {
    clear: './dist/**/',
    dist: {
        css: './dist/style',
        js: './dist/script',
        img: './dist/img',
        font: './dist/fonts',
        html: './dist'
    },
    src: {
        scss: './src/style/**/*.scss',
        js: './src/js/**/*.js',
        img: './src/img/**/*.{jpg,gif,png,ico}',
        font: './src/fonts/**/*.*',
        html: './src/**/*.html'
    },
    watch: {
        scss: './src/style/**/*.scss',
        js: './src/script/**/*.js',
        img: './src/img/**/*.{jpg,gif,png,ico}',
        font: './src/fonts/**/*.*',
        html: './src/**/*.html'
    }
}

gulp.task('clean', function (cb) {
    del([paths.clear]);
    cb();
})

gulp.task('sass', function (cb) {
    gulp.src(paths.src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.dist.css))
    cb();
})

gulp.task('copy:html', function (cb) {
    gulp.src(paths.src.html)
        .pipe(gulp.dest(paths.dist.html))
    cb()
})

const scripts = (paths, outputFilename, outputPath) => {
    return gulp
        .src(paths)
        .pipe(concat(outputFilename))
        .pipe(removeCode({production: true}))
        .pipe(gulp.dest(outputPath));
};

gulp.task('copy:js', function (cb) {
    scripts([paths.src.js], 'index.js', paths.dist.js, false);
    cb()
})

gulp.task('copy:img', function (cb) {
    gulp.src(paths.src.img)
        .pipe(gulp.dest(paths.dist.img))
    cb()
})

gulp.task('copy:fonts', (cb) => {
    gulp.src(paths.src.font)
        .pipe(gulp.dest(paths.dist.font))
    cb()
})


gulp.task('watch', () => {
    gulp.watch(paths.src.scss, gulp.series('sass'));
    gulp.watch(paths.src.html, gulp.series('copy:html'));
    gulp.watch(paths.src.js, gulp.series('copy:js'));
});


gulp.task('default', gulp.series(['clean', 'sass', 'copy:html', 'copy:js', 'copy:img', 'copy:fonts', gulp.parallel(['watch'])]))