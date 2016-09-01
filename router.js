var fs = require("fs");
var renderer = require("./renderer");

function home(req, res){
	if(req.url == "/"){	return renderer(req, res, "home", {});}
}

//contact가 detail보다 밑에있으면 detail아래 붙을 수 있으므로 먼저 쓴다
function contact(req, res){
	if(req.url == "/contact"){
	return renderer(req, res, "contact", {});
}
}

function detail(req, res){
	var detailId = req.url.replace("/","");
	if (detailId.length > 0){
		res.write(detailId);
		res.end();
	}
}
module.exports.home = home;
module.exports.contact = contact;
module.exports.detail = detail;
