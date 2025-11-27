import { useContext } from "react";
import { CartContext } from "../contexts/CartProvider";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function CartList() {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const { carrito, setCarrito } = useContext(CartContext);

  if (!carrito.length) return <p>El carrito está vacío.</p>;

  const aumentarCantidad = (id) => {
    const newCarrito = carrito.map((p) =>
      p._id === id ? { ...p, cantidad: p.cantidad + 1 } : p
    );
    setCarrito(newCarrito);
  };

  const disminuirCantidad = (id) => {
    const newCarrito = carrito.map((p) =>
      p._id === id ? { ...p, cantidad: p.cantidad > 1 ? p.cantidad - 1 : 1 } : p
    );
    setCarrito(newCarrito);
  };

  const eliminarProducto = (id) => {
    const newCarrito = carrito.filter((p) => p._id !== id);
    setCarrito(newCarrito);
  };

  const total = carrito.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );

  const createOrder = async () => {
    try {
      const orderItems = carrito.map((producto) => ({
        productId: producto._id,
        quantity: producto.cantidad,
      }));

      const response = await fetch(
        "https://proyecto-muebleria-hnos-j-1.onrender.com/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            userId: currentUser.id,
            products: orderItems,
            totalAmount: total,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Error al crear la orden");
      }
      const data = await response.json();
      console.log("Orden creada con éxito:", data);
      navigate(`user/pedidos/${data.order._id}`, { replace: true });
      setCarrito([]); // Vaciar el carrito después de crear la orden
    } catch (error) {
      console.error("Error al crear la orden:", error);
    }
  };

  return (
    <div className="productListInCart">
      {carrito.map((producto) => (
        <div
          className="productInCart"
          key={producto._id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <span>{producto.nombre}</span>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <button onClick={() => disminuirCantidad(producto._id)}>-</button>
            <span>
              <span className="cantidadWord">Cantidad:</span>{" "}
              {producto.cantidad}
            </span>
            <button onClick={() => aumentarCantidad(producto._id)}>+</button>
          </div>

          <span>${producto.precio * producto.cantidad}</span>

          <button onClick={() => eliminarProducto(producto._id)}>
            Eliminar
          </button>
        </div>
      ))}
      {/* Total */}
      <div
        style={{ marginTop: "1rem", fontWeight: "bold", textAlign: "right" }}
      >
        Total: ${total}
      </div>
      <div style={{ marginTop: "1rem", textAlign: "center" }}>
        <button
          onClick={() => {
            if (!currentUser) {
              navigate("/login", { replace: true });
            } else {
              createOrder();
            }
          }}
          className="btn"
        >
          Crear Pedido
        </button>
      </div>
    </div>
  );
}
