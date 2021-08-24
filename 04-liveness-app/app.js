const http = require('http');
const os = require('os');

let requestId = 0;

console.log("Kubia server starting");

var handler = function(request,response) {
	console.log("Received request from " + request.connection.remoteAddress);
	if(requestId % 5 == 0){
		response.writeHead(500);
		response.end();
	} else{
		response.writeHead(200);
		response.end("You've hit " + os.hostname() + "\n");
	}
	requestId +=1;
};

var www = http.createServer(handler);
www.listen(8080);
