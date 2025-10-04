/*Debe tener un manejador para rutas no
encontradas (404) y un manejador de
errores centralizado.
*/
const express = require('express');
const router = express.Router();
// Manejador para rutas no encontradas
router.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Manejador de errores centralizado
router.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

module.exports = router;