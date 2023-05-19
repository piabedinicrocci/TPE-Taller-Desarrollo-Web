const { MongoClient } = require("mongodb");
const dbName = 'test';
const uri = 'mongodb://pia:pia1234@127.0.0.1:27017/' + dbName ;
const client = new MongoClient(uri);

async function actualizarDocumentos() {
try {
    const database = client.db(dbName);
    const tienda = database.collection("tienda");

    const doc = {"articulo": /comedero*/ };
    
    const result_update = await tienda.updateMany(doc,{$inc:{cantidad: 6}});
    console.log(result_update);
    
} finally { await client.close(); } }
actualizarDocumentos().catch(console.dir);
