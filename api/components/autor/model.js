const mongoose = require('mongoose');

const authorModel = new mongoose.Schema({
          name: {type: String},
          description: {type: String},
          imgUrl: {type: String},
          cloudinary_id: {type: String},
          libros : {type: Array}
});

module.exports = mongoose.model('Autor', authorModel, 'autores');

