const express = require("express");
const router = express.Router();
const contactModel = require("../models/ContactModel");
const {getAllContacts,createContact}=require("../controllers/contactController");
// Ruta para manejar el formulario de contacto

router.get("/", getAllContacts);
router.post("/", createContact);

module.exports = router;
