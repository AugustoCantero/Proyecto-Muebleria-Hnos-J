const express = require("express");
const router = express.Router();
const {getAllOrders,getOrderById,createOrder} = require("../controllers/orderController");

router.get("/", getAllOrders);
router.get("/:id", getOrderById);
router.post("/", createOrder);

module.exports = router;