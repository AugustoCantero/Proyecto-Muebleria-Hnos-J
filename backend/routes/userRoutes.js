const express = require("express");
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const {getUserProfile, getUserById, createUser, loginUser}  = require("../controllers/userController");

router.get('/profile', authMiddleware, getUserProfile);
router.get("/:id", getUserById);
router.post("/register", createUser);
router.post("/login", loginUser);
module.exports = router;