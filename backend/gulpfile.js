var gulp = require("gulp");
var uglify = require("gulp-uglify");

//걸프태스크 우선순위
//gulp.task("hello",function(){
//	return console.log("hello");
//});

//gulp.task("hi",function(){
//	return console.log('hihi!!!');	
//});

//gulp.task("gulpworld",["hello","hi"],function(){
//	return console.log("@@@@@@ gulp world!!");
//});


//걸프 어글리파이
gulp.task("uglify", function(){
	return gulp.src("public/src/*.js").pipe(uglify()).pipe(gulp.dest("/public/dist/"));
});

gulp.task("default",["uglify"]);
