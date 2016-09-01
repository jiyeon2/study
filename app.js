var http = require("http");



http.createServer(function(request,response){
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.write("hello world \n");
	response.end();
}).listen(3030);


console.log("Server is running at localhost:3030");
