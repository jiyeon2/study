'use strict';

//외부에 존재하는 gulp라고 하는 모듈을 로드
var gulp = require('gulp');

//jade 모듈을 로드
var jade = require('gulp-jade');
//환경 설정 옵션
var config = {
	'source':'./src/',
	'destination':'./dist/',
	'jade':{
		'src': config.source+'/**/*.jade',
		'destination':'.dist/',
		'options':{
			'pretty':true
		}
	}
}
//걸프 모듈을 이용해서 task 등록
//gulp 기본 수행할 일 등록

gulp.task('default',['compile:html','watch']);

// gulp.task('default',function(){
	// gulp.run('compile:html')
// });

gulp.task('watch',function(){
	gulp.watch(config.jade.src , ['compile:html']);
})

//jade 업무 등록
gulp.task('compile:html', function(){
	return gulp.src(config.jade.src )
				.pipe(jade(config.jade.options))
				.pipe(gulp.dest(config.jade.dest);
});

