// auth-guard.js
const authGuard = (req, res, next) => {
  // Obtenemos el valor del encabezado 'authorization'
  const tokenRecibido = req.headers['autorizacion'];
 
  if (tokenRecibido === 'muebles123') {
    // El token es correcto. Añadimos información al objeto req y continuamos.
    req.usuario = { id: 1, rol: 'admin' };
    next(); // ¡Permitimos el paso!
  } else {
    // El token es incorrecto o no existe.
    // Enviamos una respuesta de error y NO llamamos a next().
    res.status(401).json({ mensaje: 'Acceso no autorizado.' });
  }
};

module.exports=authGuard;