import { useState, useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../contexts/CartProvider";
import CartList from "./CartList";

export default function Carrito() {
  const { carrito } = useContext(CartContext); // usamos context en lugar de props
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Logo y contador, igual que antes */}
      <div id="carrito-container" onClick={() => setOpen(true)}>
        <p id="num-carrito">{carrito?.length || 0}</p>
        <FaShoppingCart />
      </div>

      {/* Overlay */}
      {open && (
        <div className="carrito-overlay" onClick={() => setOpen(false)}></div>
      )}

      {/* Sidebar */}
      <div className={`carrito-sidebar ${open ? "open" : ""}`}>
        <button className="cerrar-carrito" onClick={() => setOpen(false)}>
          Cerrar
        </button>
        <CartList />
      </div>

    </>
  );
}
