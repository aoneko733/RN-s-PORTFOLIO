const gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  gulp.src('./scss/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(autoprefixer({
      browsers: ["last 2 versions"],
      cascade: false
    }))
    .pipe(gulp.dest('./css/'));
});

gulp.task('default', ['sass']);
gulp.task('watch', function(){
  gulp.watch('./scss/*.scss', ['sass']);
});
