// http://www.tutorialsteacher.com/nodejs/nodejs-eventemitter

var events = require('events');

//creamos un objeto eventEmitter
var eventEmitter = new events.EventEmitter();

//creamos un evento manejador
var connectHandler = function connected() {
    console.log('conexión creada');
    
    //disparamos el evento data_recibido
    eventEmitter.emit('data_recibido')
}

//vinculamos el evento de conexión con el manejador
eventEmitter.on('connection', connectHandler);

//vincular el evento data_recibido con la función anónima
eventEmitter.on('data_recibido', function() {
    console.log('data recibida correctamente')
});

//disparamos el evento connection
eventEmitter.emit('connection');
console.log('Programa finalizado');