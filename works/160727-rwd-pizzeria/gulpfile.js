'use strict';

 var gulp        = require('gulp'),
     sourcemaps  = require('gulp-sourcemaps'),
     sass        = require('gulp-sass');

 gulp.task('sass', function () {
   return gulp.src('sass/**/*.{sass,scss}')
   .pipe(sourcemaps.init())
   .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
   .pipe(sourcemaps.write())
   .pipe(gulp.dest('css'));
 });
  
 gulp.task('sass:watch', function () {
   gulp.watch('sass/**/*.{sass,scss}', ['sass']);
 });