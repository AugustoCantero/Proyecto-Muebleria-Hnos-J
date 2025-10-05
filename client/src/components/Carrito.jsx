import { FaShoppingCart } from "react-icons/fa";

export default function Carrito({carrito}) {
  localStorage.setItem("contador-carrito", carrito.length);
  return (
    <div id="carrito-container">
      <p id="num-carrito">{carrito.length}</p>
      <FaShoppingCart />
    </div>
  );
}
