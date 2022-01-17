const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const concat = require('gulp-concat');
const removeCode = require('gulp-remove-code');

gulp.task('clean', function(cb) {
    del(['./dist/**']);
    cb();
})

gulp.task('sass', function(cb) {
    gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
    cb();
})

gulp.task('copy:html', function (cb) {
    gulp.src('./src/app/**/*.html')
        .pipe(gulp.dest('./dist/app'))
    cb()
})

gulp.task('copy:js', function (cb) {
    gulp.src('./src/app/**/*.js')
        .pipe(concat('main.js'))
        .pipe(removeCode({ production: true }))
        .pipe(gulp.dest('./dist/app/script'))
    cb()
})

gulp.task('watch', function () {
    gulp.watch(['./app/src/**/*.scss', './app/src/**/*.html', './app/src/**/*.js'], gulp.series(['clean', 'sass', 'copy:html', 'copy:js']));
})

gulp.task('default', gulp.series(['clean', 'sass', 'copy:html', 'copy:js']))