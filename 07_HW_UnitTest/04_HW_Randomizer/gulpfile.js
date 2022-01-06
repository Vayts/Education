const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');

gulp.task('clean', function(cb) {
    del(['./dist/*']);
    cb();
})

gulp.task('sass', function(cb) {
    gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'));
    cb();
})

gulp.task('copy:html', function (cb) {
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'))
    cb()
})

gulp.task('copy:js', function (cb) {
    gulp.src('./src/**/*.js')
        .pipe(gulp.dest('./dist'))
    cb()
})

gulp.task('copy:img', function (cb) {
    gulp.src('./src/**/*.{gif,jpg,png,svg}')
        .pipe(gulp.dest('./dist'))
    cb()
})

gulp.task('watch', function () {
    gulp.watch(['./src/**/*.scss', './src/**/*.html', './src/**/*.js', './src/**/*.{gif,jpg,png,svg}'], gulp.series(['clean', 'sass', 'copy:html', 'copy:js', 'copy:img']));
})

gulp.task('default', gulp.series(['clean', 'sass', 'copy:html', 'copy:js', 'copy:img']))