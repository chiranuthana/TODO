var http = require('http');
http.createServer(function(request, responce) {
    responce.writeHead(200);
    responce.write("hello , this a dog.");
    responce.end();

}).listen(8080);

console.log('listening on port 8080.....');