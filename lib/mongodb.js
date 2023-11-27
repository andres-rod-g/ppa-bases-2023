const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://fesc:12345@cluster0.9xtuu.mongodb.net/ppaBases2023?retryWrites=true&w=majority';
const client = new MongoClient(uri);

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Conectado a MongoDB');
    return client.db();
  } catch (error) {
    console.error('Error de conexión a MongoDB:', error);
  }
}

module.exports = connectToMongoDB;