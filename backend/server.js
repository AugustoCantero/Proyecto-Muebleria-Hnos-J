// server.js
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const logger=require("./mi-logger");

// Importamos nuestro nuevo módulo de rutas
const productRoutes = require('./routes/productRoutes'); // (Haríamos lo mismo para productos)


// Middleware para parsear JSON. ¡Crucial para peticiones POST/PUT!
// Le dice a Express que si llega un cuerpo de petición en formato JSON, lo convierta en un objeto JavaScript.
app.use(express.json());
app.use(logger);
app.use(cors());

// --- RUTAS ---
app.get('/', (req, res) => {
  res.send('¡Bienvenido al API de Mueblería Jota!');
}); 

app.use('/api/products', productRoutes);

// Incorporamos error.js para manejo de errores
const manejadorDeErrores = require('./routes/error');
app.use(manejadorDeErrores);
 
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});