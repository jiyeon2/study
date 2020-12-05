'use strict';
var config, gulp, sass, autoprefixer, sourcemaps, g_if;

// 환경 설정 옵션
config = require('./gulp.config');
// 외부에 존재하는 gulp 라고 하는 모듈 로드
gulp = require('gulp');
// sass 모듈을 로드
sass = require('gulp-sass');
// autoprefixer 모듈을 로드
autoprefixer = require('gulp-autoprefixer');
// soucemaps 모듈을 로드
sourcemaps= require('gulp-sourcemaps');
// gulp-if 모듈을 로드
g_if = require('gulp-if');

// // gulp 기본 수행할 일(task) 등록
gulp.task('default', [ 
	'compile:css', 
	'watch' 
	]);

gulp.task('watch', function() {
  gulp.watch(config.sass.src, ['compile:css']);
});

//sass 업무 등록
gulp.task('compile:css',function(){
	return gulp.src(config.sass.src)
							.pipe( g_if(config.sass.sourcemaps.use, sourcemaps.init()  ) )
							.pipe( sass( config.sass.options ) ).on('error', sass.logError)
							.pipe( autoprefixer() )
							.pipe( g_if(config.sass.sourcemaps.use, sourcemaps.write(
									config.sass.sourcemaps.location
								) ) )
							.pipe( gulp.dest(config.sass.dest) );
});
