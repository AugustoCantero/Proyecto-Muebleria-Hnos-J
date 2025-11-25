const express = require("express");
const router = express.Router(); // ¡Creamos una instancia de Router!
const authMiddleware = require('../middlewares/authMiddleware');
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct }  = require("../controllers/productController.js")

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", authMiddleware, createProduct);
router.put("/:id", authMiddleware, updateProduct);
router.delete("/:id", authMiddleware, deleteProduct);

module.exports = router;
