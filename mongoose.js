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

module.exports = Article;

var Article = mongoose.model('articulos', ArticleSchema);
var articulo = new Article({articulo:"botitas", precio: 1500, cantidad:3})

async function conectar(){
    try {
        await mongoose.connect(url);
        console.log("Conexión Exitosa");
    } catch(err){
        console.log(err);
    }
};

async function insertar() {
    try {
        await conectar();
        await articulo.save();
        console.log("articulo insertado");
    } catch(error){
        console.log(error);
    } finally {
        mongoose.connection.close(); 
    }
}
//insertar();

async function insertarVarios() {
    try {
        await conectar()
        await Article.create(data);
        console.log('articulos insertados')
    } catch (err) {
        console.error(err);
    } finally{
        mongoose.connection.close();

}
}
//insertarVarios();

async function eliminar() {
    try {
        await conectar();
        const query = { articulo: "botitas"};
        await Article.deleteOne(query)
        console.log("articulo eliminado");
    } catch(error){
        console.log(error);
    } finally {
        mongoose.connection.close(); 
    }
}
//eliminar();

async function eliminarVarios() {
    try {
        await conectar();
        const query = {articulo: /comedero*/}
        await Article.deleteMany(query)
        console.log("articulos eliminados");
    } catch(error){
        console.log(error);
    } finally {
        mongoose.connection.close(); 
    }
}
//eliminarVarios();

async function actualizar() {
    try {
        await conectar();
        const query = {articulo: "collar" };
        await Article.updateMany(query, { $inc: { precio: 1400 } });
        console.log("articulos actualizados");
    } catch(error){
        console.log(error);
    } finally {
        mongoose.connection.close(); 
        
    }
}
//actualizar();

async function listarTodo() {
    try {
        await conectar();
        const articulos = await Article.find();
        console.log(articulos)
    } catch(error){
        console.log(error);
    } finally {
        mongoose.connection.close(); 
    }
}
//listarTodo();

async function buscar() {
    try {
        await conectar();
        const query = { precio: { $gt: 500, $lt: 3000 } };
        const articulos= await Article.find(query).select({_id:0, articulo: 1, precio: 1})
        console.log(articulos)
    } catch(error){
        console.log(error);
    } finally {
        mongoose.connection.close(); 
    }
}
//buscar();