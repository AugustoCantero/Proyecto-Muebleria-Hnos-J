const express = require("express");
const router = express.Router();
const {getUserById, createUser}  = require("../controllers/userController");

router.get("/:id", getUserById);
router.post("/register", createUser);

module.exports = router;