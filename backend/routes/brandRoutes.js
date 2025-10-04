const express = require('express');
const router = express.Router(); // ¡Creamos una instancia de Router!

// Datos de ejemplo
const marcas=[
      {id: 1, nombre: 'Marca 1'},
      {id: 2, nombre: 'Marca 2'}
    ];

// GET /api/products/  (la ruta es relativa al punto de montaje)
router.get('/', (req, res) => {
  res.json(marcas); // Envia respuesta en formato JSON
});

// GET /api/products/:id
router.get('/:id', (req, res) => {
  const marca = products.find(u => u.id === parseInt(req.params.id));
  if (!marca) {
    return res.status(404).json({ message: 'Marca no encontrada' });
  }
  res.json(marca);
});

// POST /api/products/

router.post('/', (req, res) => {
    // Gracias a app.use(express.json()), podemos leer el cuerpo de la petición.
    const nuevaMarca = req.body; 
    console.log('Marca recibida:', nuevaMarca);
 
  // Aquí iría la lógica para guardar en la base de datos...
  
  // Enviamos una respuesta de éxito con el código 201 (Created).
    res.status(201).json({ message: 'Marca creada con éxito', 
    product: nuevaMarca });
});

module.exports = router;