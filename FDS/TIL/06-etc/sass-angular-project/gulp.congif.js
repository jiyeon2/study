//private project

var project = {
	'source': './src',
	'destination':'./dist'
};

//@exports config{}
var config = {
	'jade':{
		'src': project.source +'**/*.jade',
		'dest':project.destination,
		'options':{
			'pretty':true
		}
	},
	'sass':{
		'src':project.source+'sass/**/*.{sass,scss}',
		'dest':project.destination+'css',
		'options':{}
	},
};



//외부 모듈 공개
module.exports = config;