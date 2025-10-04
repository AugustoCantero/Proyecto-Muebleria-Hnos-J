// mi-logger.js
const logger = (req, res, next) => {
  console.log(`Petición Recibida: ${req.method} en la ruta ${req.originalUrl} con la ip ${req.ip}`);
  
  // ¡Crucial! Llamamos a next() para que la petición pueda continuar su viaje.
  next(); 
};
module.exports =logger;