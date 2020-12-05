// @private project {}
var project = {
  'source': './',
  'destination': './'
};

// @exports config {}
var config = {

  'sass': {
    'src': project.source + 'sass/*.{sass,scss}',
    'dest': project.destination + 'css',
    'sourcemaps': {
      'use':true,
      'location': './'
    },
    'options': {
      'outputStyle':'compressed'
      //nested, compact, compressed
    }
  },
};

// 외부 모듈 공개
module.exports = config;

