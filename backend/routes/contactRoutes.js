const express = require("express");
const router = express.Router();
const contactModel = require("../models/ContactModel");

// Ruta para manejar el formulario de contacto

router.get("/", contactController.getAllContacts);
router.post("/", contactController.createContact);

module.exports = router;
