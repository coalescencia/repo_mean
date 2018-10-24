buf = new Buffer(26); 

// usar esta mejor porque new Buffer() está deprecado en la versión 10 de Node
// buf = Buffer.alloc(26)  //asignacion de 26 

for(var i = 0; i < 26 ; i++) {
    buf[i] = i + 97;
}

console.log(buf.toString('ascii')); 
console.log(buf.toString('ascii', 0,5));
console.log(buf.toString('utf8',0,5));
console.log(buf.toString(undefined, 0,5)); 

// concatener buffers:

var buffer1 = new Buffer('Tutorial ');
var buffer2 = Buffer.from('Simple y fácil de aprender');  // en lugar de usar new Buffer que está deprecado
var buffer3 = Buffer.concat([buffer1, buffer2]);

console.log("buffer3 contiene: " + buffer3.toString()); 
