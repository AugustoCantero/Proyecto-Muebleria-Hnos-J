const express = require('express');
const router = express.Router(); // ¡Creamos una instancia de Router!

// Datos de ejemplo
const {productos} = require ('../archivo');

// GET /api/products/  (la ruta es relativa al punto de montaje)
router.get('/', (req, res) => {
  res.json(productos);
});

// GET /api/products/:id
router.get('/:id', (req, res) => {
  const producto = productos.find(u => u.id === parseInt(req.params.id));
  if (!producto) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }
  res.json(producto);
});

// POST /api/products/

router.post('/', (req, res) => {
    // Gracias a app.use(express.json()), podemos leer el cuerpo de la petición.
    const nuevoProducto = req.body; 
    console.log('Producto recibido:', nuevoProducto);
 
  // Aquí iría la lógica para guardar en la base de datos...
  
  // Enviamos una respuesta de éxito con el código 201 (Created).
    res.status(201).json({ message: 'Producto creado con éxito', 
    product: nuevoProducto });
});
module.exports = router;