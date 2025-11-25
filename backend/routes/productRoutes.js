const express = require("express");
const router = express.Router(); // ¡Creamos una instancia de Router!
const authMiddleware = require('../middlewares/authMiddleware');
const authRoleMiddleware = require('../middlewares/authRoleMiddleware');
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct }  = require("../controllers/productController.js")

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", authMiddleware, authRoleMiddleware, createProduct);
router.put("/:id", authMiddleware, authRoleMiddleware, updateProduct);
router.delete("/:id", authMiddleware, authRoleMiddleware, deleteProduct);

module.exports = router;
