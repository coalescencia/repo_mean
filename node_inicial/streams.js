// Hacer uso del modelo fs
var fs = require("fs");
var datos_guardados= '';
// Crear Stream de lectura
var readerStream = fs.createReadStream('html/prueba1.html');
// Manejar eventos del stream de lectura --> data, end, error
readerStream.on('data', function(caracter) {
datos_guardados += caracter;
});
// Evento para cuando termine de leer fichero
readerStream.on('end',function(){
console.log(datos_guardados);
});
// Evento en caso de error en la lectura
readerStream.on('error', function(err){
console.log(err.stack);
});
console.log("Fin de lectura de datos");