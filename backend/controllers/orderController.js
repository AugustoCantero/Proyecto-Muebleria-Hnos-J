const OrderModel = require("../models/OrderModel");

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find({ userId: req.user.id });
    console.log('Orders for user:', req.user.id, orders);
    res.json(orders);
  } catch (error) {
    console.error("Error al obtener órdenes:", error);
    res.status(500).json({ message: "Error al obtener órdenes" });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await OrderModel.findById(req.params.id).populate(
      "products.productId"
    );
    if (!order) {
      return res.status(404).json({ message: "Orden no encontrada" });
    }
    res.json(order);
  } catch (error) {
    console.error("Error al obtener orden:", error);
    res.status(500).json({ message: "Error al obtener orden" });
  }
};

exports.createOrder = async (req, res) => {
  const newOrder = req.body;
  try {
    const createdOrder = await OrderModel.create(newOrder);
    res
      .status(201)
      .json({ message: "Orden creada con éxito", order: createdOrder });
  } catch (error) {
    console.error("Error al crear orden:", error);
    res.status(500).json({ message: "Error al crear orden" });
  }
};
