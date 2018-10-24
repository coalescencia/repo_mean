var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.end("Hola que tal");
}).listen(8081);
console.log("está funcionando");