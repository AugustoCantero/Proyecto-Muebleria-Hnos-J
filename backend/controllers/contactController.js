const ContactModel = require("../models/ContactModel");

exports.getAllContacts = async (req, res) => {
  try {
    const contactos = await ContactModel.find();
    res.status(200).json(contactos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los mensajes" });
  }
};

exports.createContact = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newContact = new ContactModel({ name, email, message });
    await newContact.save();
    res
      .status(201)
      .json({ message: "Mensaje enviado con éxito", content: newContact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al enviar el mensaje" });
  }
};
