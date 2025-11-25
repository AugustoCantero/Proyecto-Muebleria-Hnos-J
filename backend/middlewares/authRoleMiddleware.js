const authRoleMiddleware = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next(); // El usuario tiene el rol adecuado, continuar
  } else {
    res.status(403).json({ message: "Acceso denegado: rol insuficiente" });
  }
};

module.exports = authRoleMiddleware;
