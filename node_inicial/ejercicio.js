var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
   // res.writeHead(200, {'Content-Type': 'text/html'});  
    res.setHeader("Content-Type", "text/html; charset=utf-8"); 
    res.write(req.url + '\n'); 

    //https://www.w3schools.com/nodejs/nodejs_url.asp
   
    var q = url.parse(req.url, true);
    // q.query retorna un objeto: {par1: 'hola', par2: 'quetal'}
    //console.log(q.pathname + '\r');
    res.end(' Mi primer servidor en Node' + q.query.par1 );
}).listen(8080);

console.log("el servidor está funcionando ");