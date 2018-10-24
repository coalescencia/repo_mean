/* var fs = require('fs');

var data = fs.readFile('input.txt', function(err, data){
    if(err) return console.error(err);
    console.log(data.toString());
});

console.log("programa finalizado");
*/

var dns = require('dns');

dns.resolve4('google.com', function(err, direccion) {
    if(err) throw err;

    console.log("direccion: " + JSON.stringify(direccion));
});