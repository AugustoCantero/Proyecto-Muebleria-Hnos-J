const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  descripcion: {
    type: String,
    trim: true
  },
  img: {
    type: String,
    trim: true
  },
  medidas: {
    type: String,
    trim: true
  },
  materiales: {
    type: String,
    trim: true
  },
  acabado: {
    type: String,
    trim: true
  },
  peso: {
    type: String,
    trim: true
  },
  capacidad: {
    type: String,
    trim: true
  },
  modulares: {
    type: String,
    trim: true
  },
  tapizado: {
    type: String,
    trim: true
  },
  confort: {
    type: String,
    trim: true
  },
  rotacion: {
    type: String,
    trim: true
  },
  garantia: {
    type: String,
    trim: true
  },
  cargaMaxima: {
    type: String,
    trim: true
  },
  almacenamiento: {
    type: String,
    trim: true
  },
  caracteristicas: {
    type: String,
    trim: true
  },
  colchon: {
    type: String,
    trim: true
  },
  estructura: {
    type: String,
    trim: true
  },
  relleno: {
    type: String,
    trim: true
  },
  sostenibilidad: {
    type: String,
    trim: true
  },
  extension: {
    type: String,
    trim: true
  },
  apilables: {
    type: String,
    trim: true
  },
  incluye: {
    type: String,
    trim: true
  },
  regulacion: {
    type: String,
    trim: true
  },
  certificacion: {
    type: String,
    trim: true
  },
  precio: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true,
    default: 0
  }
});

module.exports = mongoose.model('Product', productSchema);