// server.js
 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const logger=require("./mi-logger");
const authGuard = require('./autorizacion');
// Importamos nuestro nuevo módulo de rutas
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes'); // (Haríamos lo mismo para productos)
const brandRoutes = require('./routes/brandRoutes');

// Middleware para parsear JSON. ¡Crucial para peticiones POST/PUT!
// Le dice a Express que si llega un cuerpo de petición en formato JSON, lo convierta en un objeto JavaScript.
app.use(express.json());
// Le decimos a Express que cualquier petición a un archivo que exista
// en la carpeta 'public' debe ser servida directamente.
app.use(express.static('public'));
app.use(logger);
// Le decimos a la app: "Para cualquier ruta que empiece con /api/users,
// deja que el 'userRoutes' se encargue".
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/brands', brandRoutes);

// Esta ruta ESTÁ PROTEGIDA. Pasamos el middleware antes del controlador final.
app.get('/api/admin/panel', authGuard, (req, res) => {
  // Si llegamos aquí, es porque authGuard llamó a next().
  // Podemos acceder a la información que el middleware añadió a req.
  res.send(`Bienvenido al panel de admin, usuario con ID: ${req.usuario.id}`);
});


// --- RUTAS ---
app.get('/', (req, res) => {
  res.send('¡Bienvenido al API de Mueblería Jota!');
}); 

// ...
 
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});