const { MongoClient } = require("mongodb");
const dbName = 'test';
const uri = 'mongodb://pia:pia1234@127.0.0.1:27017/' + dbName ;
const client = new MongoClient(uri);

async function eliminarDocumento() {
try {
    const database = client.db(dbName);
    const tienda = database.collection("tienda");

    const doc = {"articulo": "bozal"};
    
    const result_delete = await tienda.deleteOne(doc);
    console.log(result_delete);
    
} finally { await client.close(); } }
eliminarDocumento().catch(console.dir);
