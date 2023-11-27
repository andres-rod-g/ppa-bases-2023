const mysql = require('mysql');

const connectionMySQL = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ppaBases2023',
});

connectionMySQL.connect((error) => {
    if (error) {
        console.error('Error de conexión a MySQL:', error);
        return
    } 
    console.log('Conectado a MySQL');
});

module.exports = connectionMySQL;
