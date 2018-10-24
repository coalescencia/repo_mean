

// https://www.w3schools.com/nodejs/nodejs_mongodb_insert.asp


// Módulo para conectar a la BBDD
const client = require('mongodb').MongoClient;
// módulo para gestionar errores
const assert = require('assert');

// conexion a la bbdd:
// const url = 'mongodb://127.0.0.1:27017';
// en mlab.com tengo esta base de datos: 
const url = 'mongodb://tritio:123456abc@ds237373.mlab.com:37373/mongo_prueba';

// nombre base de datos:
const dbName = "mongo_prueba";

// método para la conexión a la base de datos:
// el objeto cli representa la base de datos en caso de conexión:
client.connect(url,  { useNewUrlParser: true }, function( error, cli) {
    //tratar el fallo en caso de error
    assert.equal(null, error); // en el caso de que la respuesta sea nula devuelve el error
    // es igual a decir if(error) throw error;
    // si todo va bien:
    console.log("estamos conectados correctamente al servidor");
    var dbo = cli.db(dbName);
    // crear la tabla y dar nombre
   
   /* dbo.createCollection("usuarios", function(err, res) {
        assert.equal(null, error);
        console.log("Tabla usuarios creada!");       
    }); 
    */

    

    // creamos objeto JSON para insertar en la BBDD
  /*  var usuarios = [
        { name: 'John', address: 'Highway 71'},
        { name: 'Peter', address: 'Lowstreet 4'},
        { name: 'Amy', address: 'Apple st 652'},
        { name: 'Hannah', address: 'Mountain 21'},
        { name: 'Michael', address: 'Valley 345'},
        { name: 'Sandy', address: 'Ocean blvd 2'},
        { name: 'Betty', address: 'Green Grass 1'},
        { name: 'Richard', address: 'Sky st 331'},
        { name: 'Susan', address: 'One way 98'},
        { name: 'Vicky', address: 'Yellow Garden 2'},
        { name: 'Ben', address: 'Park Lane 38'},
        { name: 'William', address: 'Central st 954'},
        { name: 'Chuck', address: 'Main Road 989'},
        { name: 'Viola', address: 'Sideway 1633'}
    ];

    dbo.collection("usuarios").insertMany(usuarios, function(err, res) {
        if (err) throw err;
         console.log(res.insertedCount + " documentos insertados");
    });

    */

    
/*
    // Buscando documentos
    var consulta = {name:'Chuck'};
    dbo.collection("usuarios").findOne(consulta, function(err, res) {
       assert.equal(null, err);      
        // imprimir el valor de la consulta
        console.log("Nombre: " + res.name + " dirección: " + res.address); // res devuelve el json que tiene un name y un address
    });

    */
    var consulta = {};
    var orden = {name:-1};
    dbo.collection("usuarios").find(consulta).sort(orden).limit(6).toArray(function(err, res) {
        assert.equal(null, err);      
         // imprimir el valor de la consulta
         console.log(res); // res devuelve el json que tiene un name y un address
     });

    // borrando documentos
/*
    var consulta = { name: "William"};
    dbo.collection("usuarios").deleteOne(consulta, function(err, res) {
        assert.equal(null, err);
        console.log("usuario eliminado", res);
    }); 
    */
    
    /*
   consulta = { name: "Viola"};
   dbo.collection("usuarios").deleteMany(consulta, function(err, res) {
       assert.equal(null, err);
       console.log("usuarios eliminados", res);
   }); 

   */

   // actualizar documentos:
/*
   consulta = { address: "Park Lane 38"};
   dbo.collection("usuarios").updateMany(consulta, {$set: { address: "calle Pimpollo 23"}}, function(err, res) {
       assert.equal(null, err);
       console.log("documentos actualizados: ", res);
   });
*/

/*
consulta = { name: /^S/};
dbo.collection("usuarios").updateMany(consulta, {$set: { address: "calle Viriato 100"}}, function(err, res) {
    assert.equal(null, err);
    console.log("documentos actualizados: ", res);
});
*/
   cli.close(); // sólo se cierra una vez hayamos creado la primera vez la base de datos
});



