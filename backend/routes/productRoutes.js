const express = require("express");
const productoModel = require("../models/ProductModel");
const router = express.Router(); // ¡Creamos una instancia de Router!

// GET /api/products/  (la ruta es relativa al punto de montaje)
router.get("/", async (req, res) => {
  try {
    const products = await productoModel.find();
    res.json(products);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ message: "Error al obtener productos" });
  }
});

// GET /api/products/:id (devuelve un producto en especifico)
router.get("/:id", async (req, res) => {
  try {
    const producto = await productoModel.findById(req.params.id);
    if (!producto) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json(producto);
  } catch (error) {
    console.error("Error al obtener producto:", error);
    res.status(500).json({ message: "Error al obtener producto" });
  }
});

// POST /api/products/

router.post("/", async (req, res) => {
  const nuevoProducto = req.body;
  try {
    const productoCreado = await productoModel.create(nuevoProducto);
    res
      .status(201)
      .json({ message: "Producto creado con éxito", producto: productoCreado });
  } catch (error) {
    console.error("Error al crear producto:", error);
    res.status(500).json({ message: "Error al crear producto" });
  }
});

router.put("/:id", async (req, res) => {
  const datosActualizados = req.body;
  try {
    const productoActualizado = await productoModel.findByIdAndUpdate(
      req.params.id,
      datosActualizados,
      { new: true, runValidators: true }
    );
    if (!productoActualizado) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json({
      message: "Producto actualizado con éxito",
      producto: productoActualizado,
    });
  } catch (error) {
    console.error("Error al actualizar producto:", error);
    res.status(500).json({ message: "Error al actualizar producto" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const productoEliminado = await productoModel.findByIdAndDelete(
      req.params.id
    );
    if (!productoEliminado) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json({
      message: "Producto eliminado con éxito",
      producto: productoEliminado,
    });
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    res.status(500).json({ message: "Error al eliminar producto" });
  }
});

module.exports = router;
