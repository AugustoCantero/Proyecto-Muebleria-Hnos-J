const express = require('express');
const router = express.Router(); // ¡Creamos una instancia de Router!
 
// Datos de ejemplo
const users = [{ id: 1, name: 'Ana' }, { id: 2, name: 'Luis' }];
 
// GET /api/users/  (la ruta es relativa al punto de montaje)
router.get('/', (req, res) => {
  res.json(users);
});
 
// GET /api/users/:id
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }
  res.json(user);
});
 
// POST /api/users/
router.post('/', (req, res) => {
    // ... lógica para crear un usuario ...
    res.status(201).json({ message: 'Usuario creado' });
});
 
// 3. Exportamos el router para que la app principal pueda usarlo
module.exports = router;