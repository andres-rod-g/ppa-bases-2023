const connectionMySQL = require("./mysql");

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS logs (
    date TIMESTAMP,
    type TEXT,
    description TEXT
  )`;


const InitDBMySQL = connectionMySQL.query(createTableQuery, (error, results, fields) => {
    if (error) {
    console.error('Error al ejecutar la consulta de creación de la tabla:', error);
    return
    }
});

module.exports = InitDBMySQL