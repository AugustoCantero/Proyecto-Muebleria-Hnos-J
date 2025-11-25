const express = require("express");
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const {getAllOrders,getOrderById,createOrder} = require("../controllers/orderController");

router.get("/", authMiddleware, getAllOrders);
router.get("/:id", authMiddleware, getOrderById);
router.post("/", authMiddleware, createOrder);

module.exports = router;