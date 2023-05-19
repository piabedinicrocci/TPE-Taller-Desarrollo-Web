const { MongoClient } = require("mongodb");
const dbName = 'test';
const uri = 'mongodb://pia:pia1234@127.0.0.1:27017/' + dbName ;
const client = new MongoClient(uri);

//buscar documentos
async function buscarDocumentos() {
try {
    const database = client.db(dbName);
    const tienda = database.collection("tienda");

    // Query para encontrar los articulos cuyo precio esté entre 4000-15000
    const query = { "precio": {$lt:15000,$gt:4000} };
    const options = {
        // ordena las tuplas matcheadas en orden descendente por precio
        sort: { "precio": -1 },
        // incluye solo los campos 'articulo' y 'precio' en el documento retornado
        projection: { _id: 0, articulo: 1, precio: 1 },
    };
    const cursor = tienda.find(query, options);
    // imprime un mensaje si no se encontraron documentos
    if ((await tienda.countDocuments(query)) === 0) {
    console.log("No se encontraron documentos!");
    }
    // replace console.dir with your callback to access individual elements
    await cursor.forEach(console.dir);

} finally { await client.close(); } }
buscarDocumentos().catch(console.dir);