
const mongoose = require('mongoose');


var bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true

    },
    summary: String,
    isbn: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
    created: {
        type: Date,
        default: Date.now
    }
});

//relacionar el nombre del modelo con el esquema:
var Book = mongoose.model('Book', bookSchema);

module.exports = Book;