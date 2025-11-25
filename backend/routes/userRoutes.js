const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getUserById,
  createUser,
  loginUser,
} = require("../controllers/userController");

router.get("/profile", authMiddleware, getUserById);
router.post("/register", createUser);
router.post("/login", loginUser);
module.exports = router;
