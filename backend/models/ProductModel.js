const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true },
  descripcion: { type: String, trim: true },
  precio: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  img: { type: String },
  medidas: { type: String },
  materiales: { type: String },
  acabado: { type: String },
  capacidad: { type: String },
  tapizado: { type: String },
  confort: { type: String },
  rotacion: { type: String },
  garantia: { type: String },
  cargaMaxima: { type: String },
  almacenamiento: { type: String },
  caracteristicas: { type: String },
  colchon: { type: String },
  estructura: { type: String },
  relleno: { type: String },
  sostenibilidad: { type: String },
  extension: { type: String },
  modulares: { type: String },
  regulacion: { type: String },
  certificacion: { type: String },
  incluye: { type: String },
  peso: { type: String },
});

const ProductoModel = mongoose.model("Producto", productoSchema);

module.exports = ProductoModel;
