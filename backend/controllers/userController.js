const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getUserById = async (req, res) => {
  try {
    const usuario = await UserModel.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(usuario);
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    res.status(500).json({ message: "Error al obtener usuario" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const usuario = await UserModel.findOne({ email: req.body.email });
    if (!usuario) {
      return res.status(400).json({ message: "Credenciales inválidas" });
    }

    const esContraseñaValida = await bcrypt.compare(
      req.body.password,
      usuario.password
    );
    if (!esContraseñaValida) {
      return res.status(400).json({ message: "Credenciales inválidas" });
    }

    const token = jwt.sign(
      { id: usuario._id, username: usuario.username, role: usuario.role },
      process.env.SECRET_KEY_JWT,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      token,
      user: {
        id: usuario._id,
        username: usuario.username,
        email: usuario.email,
        role: usuario.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Error al iniciar sesion" });
  }
};

exports.createUser = async (req, res) => {
  try {
    // 1. Recibimos los datos del formulario
    const { username, email, password } = req.body;

    // 2. Verificamos si el usuario o email ya existen
    const existingUser = await UserModel.findOne({
      $or: [{ email }, { username }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "El email o nombre de usuario ya está en uso." });
    }

    // 3. Hasheamos la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Creamos el nuevo usuario con la contraseña hasheada
    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
    });

    // 5. Guardamos el usuario en la base de datos
    const savedUser = await newUser.save();

    // 6. Respondemos al frontend (sin enviar la contraseña)
    res.status(201).json({
      _id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
    });
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor", error });
  }
};
