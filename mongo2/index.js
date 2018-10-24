
const client = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectId = require('mongodb').ObjectId;

const url = 'mongodb://tritio:123456abc@ds237373.mlab.com:37373/mongo2';
// nombre base de datos en el servidor mlab.com:
const dbName = "mongo2";

client.connect(url,  { useNewUrlParser: true }, function( error, cli) {
   
    assert.equal(null, error); 
    console.log("estamos conectados correctamente al servidor");
    var dbo = cli.db(dbName);

    var coleccion = dbo.collection('estudiante');

  /*   insertarEstudiantes(estudiantes, coleccion, function() {
        cli.close();
    }); */
 
    var consulta = {name: /^S/};
    buscarEstudiantes(consulta, coleccion, function() {
        cli.close();
    }); 
    
    var o_id = new ObjectId("5bcadd119b595d1942d1e4b8");
    var o_id_2 = new ObjectId("5bcadd119b595d1942d1e4b5");
    var consulta2 = { _id: { $in: [ o_id, o_id_2]}};
    buscarEstudiantes(consulta2, coleccion, function() {
        cli.close();
    });

    var consulta = {telefono: {"$exists" : false}};
    var valor = {$set: { telefono: 6734963}};
    actualizarEstudiantes(consulta, valor, coleccion, function() {
        cli.close();
    });

    
    var consulta = {name: "Petra"};
    borrarEstudiantes(consulta, coleccion, function() {
        cli.close();
    });

    var campo_indice = { edad: 1 };    
    agregarIndice(coleccion, campo_indice, function() {
        cli.close();
    });
    

});

/****************    FUNCIONES    ************************** */

//*** Insertar documentos:  ***/

var insertarEstudiantes = function( estudiantes, coleccion, callback) {
// le pasamos la base de datos y el callback que devuelve el resultado
   
    coleccion.insertMany(estudiantes, function(err, res) {
        assert.equal(null, err);
        console.log("estudiantes insertados correctamente: " , res.result.n);
        callback(res);
    });
}

//*** Buscar estudiantes: ***/

 var buscarEstudiantes = function(consulta, coleccion, callback) {
    coleccion.find(consulta).limit(3).toArray(function(err, res) {
        assert.equal(null, err);
        console.log(res);
        callback(res);
    })
 }


 //*** Actualizar estudiantes  ***/

 var actualizarEstudiantes = function(consulta, valor, coleccion,callback ) {
     coleccion.updateMany(consulta, valor, function(err, res) {
        assert.equal(null, err);
        console.log("valores actualizados: ", res.result.n);
        callback(res);

     } )
 }

//***    Borrar documentos    ***/
var borrarEstudiantes = function(consulta, coleccion, callback) {
    coleccion.deleteMany(consulta, function(err, res) {
        assert.equal(null, err);
        console.log("valores borrados: ", res.result.n);
        callback(res);
    });
   
}

// Creacíón de índices:
var agregarIndice = function(coleccion, campo_indice, callback) {
    coleccion.createIndex(campo_indice, function(err, res) {
        assert.equal(null,err);
        console.log("índices agregados");
        callback(res);

    })
}





var estudiantes = [
    { name: 'Josefa', address: 'carretas 71'},
    { name: 'Sandra', address: 'Orquidea 4'},
    
];