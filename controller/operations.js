var model = require('../models/ArticleSchema.js');

async function findAll(req, res) {
    try {
        const query = {};
        const options = { "_id": 0, articulo: 1, precio: 1, cantidad: 1, material: 1  };
        const out = await model.find(query, options);
        res.json(out);
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

async function findByPrice(req, res) {
    try {
        const precio = req.params.precio;
        const query = { precio: precio };
        const options = { "_id": 0, articulo: 1, precio: 1, cantidad: 1, material: 1  };
        const out = await model.find(query, options);
        res.json(out);
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

async function findByName(req, res) {
    try {
        const nombre = req.params.nombre;
        const query = { articulo: { $regex: nombre} };
        const options = { "_id": 0, articulo: 1, precio: 1, cantidad: 1, material: 1 };
        const out = await model.find(query, options);
        res.json(out);
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

async function insertArticle(req, res) {
    try {
        const data = req.body;
        await model.create(data);
        res.send("Insertado con éxito");
    } catch(error){
        res.status(500);
        res.send(error);
    }
}

async function updatePriceArticle(req, res) {
    try {
        const articulo = req.params.articulo;
        const precio = req.body;
        const actualizar = await model.updateOne({articulo: articulo}, {$set:{precio: precio}});
        res.json(actualizar)
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

async function updateAmountArticle(req, res) {
    try {
        const articulo = req.params.articulo;
        const cant = req.body;
        const actualizar = await model.updateOne({articulo: articulo}, cant);
        res.json(actualizar)
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}

// Borrar articulo
async function deleteArticle(req, res) {
    try {
        const articulo = req.params.articulo;
        const eliminar = await model.deleteOne({articulo: articulo});
        res.json(eliminar)
    } catch (error) {
        res.status(500);
        res.send(error);
    }
}


module.exports = {findAll, findByPrice, findByName, insertArticle, updatePriceArticle, updateAmountArticle, deleteArticle}