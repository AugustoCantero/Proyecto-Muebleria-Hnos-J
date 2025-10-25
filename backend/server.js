require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./db");
const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT_BACKEND;
const logger = require("./middlewares/mi-logger");

// Importamos nuestros nuevos módulos de rutas
const productRoutes = require("./routes/productRoutes"); // (Haríamos lo mismo para productos)
const manejadorDeErrores = require("./routes/error");

// Conectamos a la base de datos 
connectDB();

// Middleware para parsear JSON. ¡Crucial para peticiones POST/PUT!
// Le dice a Express que si llega un cuerpo de petición en formato JSON, lo convierta en un objeto JavaScript.
app.use(express.json());
app.use(logger);
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "assets")));
// --- RUTAS ---
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("¡Bienvenido al API de Mueblería Jota!");
});

// Incorporamos error.js para manejo de errores
app.use(manejadorDeErrores);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
