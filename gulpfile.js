var gulp = require('gulp');
var pug = require('gulp-pug');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');

gulp.task('pug', function () {
  return gulp.src('./src/pug/*.pug')
  .pipe( pug( {pretty: false} ) )
  .pipe(gulp.dest('./dist'));
});

gulp.task('images', function () {
	gulp.src(['./images/*.png', './images/*.jpg'])
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
});

gulp.task('sass', function () {
  return gulp.src('./src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'));
});