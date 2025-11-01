const express = require("express");
const router = express.Router();
const contactModel = require("../models/ContactModel");

// Ruta para manejar el formulario de contacto
router.get("/", async (req, res) => {
  try {
    const contactos = await contactModel.find();
    res.status(200).json(contactos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los mensajes" });
  }
});

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newContact = new contactModel({ name, email, message });
    await newContact.save();
    res
      .status(201)
      .json({ message: "Mensaje enviado con éxito", content: newContact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al enviar el mensaje" });
  }
});

module.exports = router;
