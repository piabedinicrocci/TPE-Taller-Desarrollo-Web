const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const ArticleSchema = new Schema ({
    articulo: String,
    material: String,
    precio: Number,
    stock: Number,
    imagen: String
});

module.exports = mongoose.model('Article', ArticleSchema);

