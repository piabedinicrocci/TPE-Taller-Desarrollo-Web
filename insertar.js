const { MongoClient } = require("mongodb");
const dbName = 'test';
const uri = 'mongodb://pia:pia1234@127.0.0.1:27017/' + dbName ;
const client = new MongoClient(uri);

async function insertarDocumentos() {
try {
    const database = client.db(dbName);
    const tienda = database.collection("tienda");

    const doc = [{
        articulo: "bolso transportador",
        material: "tela",
        precio: 9500,
        cantidad: "1",
    },
    {
        articulo: "bozal",
        material: "plastico",
        precio: 4320,
        cantidad: "1",
    },
    {
        articulo: "hueso masticable",
        material: "cuero deshidratado",
        precio: 1280,
        cantidad: "1",
    }]
    const result_insert = await tienda.insertMany(doc);
    console.log(result_insert);
    
} finally { await client.close(); } }
insertarDocumentos().catch(console.dir);
