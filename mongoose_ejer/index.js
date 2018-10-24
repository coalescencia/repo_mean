const mongoose = require('mongoose');
const assert = require('assert');
var  Author = require("./author");
var Book = require("./book");

var url = 'mongodb://tritio:123456abc@ds237373.mlab.com:37373/mongoose_db';

mongoose.connect(url, { useNewUrlParser: true }, function(err, res) {
    assert.equal(null, err);
    console.log("conexion establecida");

    // creamos un autor:
    var nuevo_autor = new Author({
        _id: new mongoose.Types.ObjectId(),
        name: {
            firstName: "Pepe",
            lastName: "Otilio"
        },
        bio: "asdfas adffal erfasdf", 
        twitter: "https://twitter.com/Pepe"
    });

    var nuevo_libro = new Book({
        _id: new mongoose.Types.ObjectId(),
        title: "Las aventuras de Tri",
        summary: "un libro que tiene muuuuchas cosas.....",
        isbn: "35k4234",
        author: nuevo_autor._id
    });

    nuevo_autor.save(function(err) {
        assert.equal(null, err);
        console.log("autor guardado");


        var nuevo_libro = new Book({
            _id: new mongoose.Types.ObjectId(),
            title: "Las aventuras de Tri",
            summary: "un libro que tiene muuuuchas cosas.....",
            isbn: "35k4234",
            author: nuevo_autor._id
        });
        nuevo_libro.save(function(err) {
            assert.equal(null, err);
            console.log("libro guardado");
    
        })

        }
    )

});



