const mongoose = require('mongoose');
const data = require('./data.json');
const url = 'mongodb://pia:pia1234@127.0.0.1:27017/test';
var Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    articulo: String,
    material: String,
    precio: Number,
    cantidad: Number,
});

async function conectar(){
    await mongoose.connect(url).then(() => {
        console.log('Conexión Exitosa')
    }).catch((error) => {
        console.error('Error al conectar a la base de datos:', error)
    });
}

conectar().catch(console.dir);

var Article = mongoose.model('tienda', ArticleSchema); //cat

module.exports = Article;

Article.create(data).then(() => console.log('Insertado con Exito')).catch((err) => console.error("Error: ", err)).finally(() => mongoose.connection.close());