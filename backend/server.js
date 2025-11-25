require("dotenv").config();
const connectDB = require("./db");
const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
const logger = require("./middlewares/mi-logger");

// Importamos nuestros nuevos módulos de rutas
const productRoutes = require("./routes/productRoutes"); // (Haríamos lo mismo para productos)
const manejadorDeErrores = require("./routes/error");
const contactRoutes = require("./routes/contactRoutes");
const orderRoutes = require("./routes/orderRoutes");
const userRoutes = require("./routes/userRoutes");

// Conectamos a la base de datos
connectDB();

// Middleware para parsear JSON. ¡Crucial para peticiones POST/PUT!
// Le dice a Express que si llega un cuerpo de petición en formato JSON, lo convierta en un objeto JavaScript.
app.use(express.json());

app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "assets")));

// --- RUTAS ---
app.use("/api/products", productRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("¡Bienvenido al API de Mueblería Jota!");
});

// Incorporamos error.js para manejo de errores
app.use(manejadorDeErrores);
app.use(logger);

app.listen(PORT, () => {
  console.log(
    `Servidor corriendo en https://proyecto-muebleria-hnos-j-1.onrender.com/`
  );
});
