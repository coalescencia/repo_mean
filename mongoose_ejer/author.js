const mongoose = require('mongoose');


var authorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: String
    },
    bio: String,
    twitter: {
        type: String,
        validate: {
            validator: function(text) {
                return text.indexOf('https://twitter.com') === 0;
            },
            message: "Twitter debe comenzar con https://twitter.com"
        }
    }
});


//relacionar el nombre del modelo con el esquema:
var Author = mongoose.model('Author', authorSchema);

module.exports = Author;

