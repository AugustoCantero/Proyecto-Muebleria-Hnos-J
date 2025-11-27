const ProductModel = require("../models/ProductModel");
const fs = require("fs");
const path = require("path");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ message: "Error al obtener productos" });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const producto = await ProductModel.findById(req.params.id);
    if (!producto) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json(producto);
  } catch (error) {
    console.error("Error al obtener producto:", error);
    res.status(500).json({ message: "Error al obtener producto" });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { img, ...data } = req.body;
    let imagePath = null;

    if (img) {
      const matches = img.match(/^data:(.+);base64,(.+)$/);

      if (!matches) {
        return res.status(400).json({ message: "Formato de imagen inválido" });
      }

      const ext = matches[1].split("/")[1];
      const base64Data = matches[2];
      const buffer = Buffer.from(base64Data, "base64");

      const uploadDir = path.join(__dirname, "../uploads");
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
      }

      const filename = Date.now() + "." + ext;
      const filePath = path.join(uploadDir, filename);

      fs.writeFileSync(filePath, buffer);

      imagePath = `/uploads/${filename}`;
    }

    const nuevoProducto = {
      ...data,
      img: imagePath,
    };

    const productoCreado = await ProductModel.create(nuevoProducto);

    res.status(201).json({
      message: "Producto creado con éxito",
      producto: productoCreado,
    });
  } catch (error) {
    console.error("Error al crear producto:", error);
    res.status(500).json({ message: "Error al crear producto" });
  }
};

exports.updateProduct = async (req, res) => {
  const datosActualizados = req.body;
  try {
    const productoActualizado = await ProductModel.findByIdAndUpdate(
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
};

exports.deleteProduct = async (req, res) => {
  try {
    const productoEliminado = await ProductModel.findByIdAndDelete(
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
};
