const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style(){
    return gulp.src('./docs/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./docs/css'))
        .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server: {
            baseDir: './docs',
            index: './index.html'
        }
    });
    gulp.watch('./docs/scss/**/*.scss', style);
    gulp.watch('./docs/**/*.html').on('change', browserSync.reload);
    gulp.watch('./docs/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;