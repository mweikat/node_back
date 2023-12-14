const { MongoClient } = require('mongodb');

// URL de conexión a MongoDB.
const uri = process.env.DBMongoUri;

// Opciones de conexión
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

// Crear un cliente de MongoDB.
const client = new MongoClient(uri, options);



const dbMongo = () => {

        // Conectar al servidor de MongoDB.
        client.connect()
        .then(() => {
        console.log('Conexión exitosa a la base de datos');

        // Puedes realizar operaciones en la base de datos aquí.

        // Finalizar la conexión cuando hayas terminado de usarla.
        client.close();
        })
        .catch(error => {
        console.error('Error al conectar a la base de datos:', error);
        });
}

module.exports = dbMongo