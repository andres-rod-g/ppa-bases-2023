const express = require('express');
const app = express();
const port = 3000;

// Import your routes
const mainRoutes = require('./routes/route-handler');
const InitDBMySQL = require('./lib/initDataBasesMySQL');


// Middleware para procesar JSON en el cuerpo de la solicitud
app.use(express.json());

// Use the routes
app.use('/', mainRoutes);

InitDBMySQL

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
