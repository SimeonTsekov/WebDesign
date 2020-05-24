const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style(){
    return gulp.src('./Project/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./Project/css'))
        .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server: {
            baseDir: './Project',
            index: '/html/MainPage.html'
        }
    });
    gulp.watch('./Project/scss/**/*.scss', style);
    gulp.watch('./Project/html/**/*.html').on('change', browserSync.reload);
    gulp.watch('./Project/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;