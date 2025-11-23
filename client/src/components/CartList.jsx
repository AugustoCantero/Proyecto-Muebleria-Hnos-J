import { useContext } from "react";
import { CartContext } from "../contexts/CartProvider";

export default function CartList() {
  const { carrito, setCarrito } = useContext(CartContext);

  if (!carrito.length) return <p>El carrito está vacío.</p>;

  // Funciones para ajustar cantidad
  const aumentarCantidad = (id) => {
    const newCarrito = carrito.map((p) =>
      p._id === id ? { ...p, cantidad: p.cantidad + 1 } : p
    );
    setCarrito(newCarrito);
  };

  const disminuirCantidad = (id) => {
    const newCarrito = carrito
      .map((p) =>
        p._id === id
          ? { ...p, cantidad: p.cantidad > 1 ? p.cantidad - 1 : 1 }
          : p
      );
    setCarrito(newCarrito);
  };

  // Función para eliminar producto del carrito
  const eliminarProducto = (id) => {
    const newCarrito = carrito.filter((p) => p._id !== id);
    setCarrito(newCarrito);
  };

  // Calcular total
  const total = carrito.reduce(
    (acc, producto) => acc + producto.precio * producto.cantidad,
    0
  );

  return (
    <div>
      {carrito.map((producto) => (
        <div
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
            <span>Cantidad: {producto.cantidad}</span>
            <button onClick={() => aumentarCantidad(producto._id)}>+</button>
          </div>

          <span>${producto.precio * producto.cantidad}</span>

          <button onClick={() => eliminarProducto(producto._id)}>Eliminar</button>
        </div>
      ))}

      {/* Total */}
      <div style={{ marginTop: "1rem", fontWeight: "bold", textAlign: "right" }}>
        Total: ${total}
      </div>
    </div>
  );
}