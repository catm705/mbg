var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('build-css', function() {
    return gulp.src('./public/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('./public/sass/**/*.scss',['build-css']);
});

gulp.task('default', ['build-css', 'watch']);
