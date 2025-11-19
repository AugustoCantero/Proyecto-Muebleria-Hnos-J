const express = require("express");
const router = express.Router();


router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);

module.exports = router;