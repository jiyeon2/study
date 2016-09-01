var fs = require("fs");


function home(req,res){
	if(req.url == "/"){
		fs.readFile("./layout/home.html", function(err, data){
			res.write(data);
			res.end();
		});
	}
}


function detail(req,res){
	var detailId = req.url.replace("/");
	if (detailId.length > 0){
		res.write(detailId);
		res.end();
	}
}


module.exports.home = home;
module.exports.detail = detail;
