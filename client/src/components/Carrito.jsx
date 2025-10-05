import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Carrito() {
  const [contador, setContador] = useState(
    Number(localStorage.getItem("contador-carrito") || 0)
  );

  useEffect(() => {
    const actualizarContador = () => {
      setContador(Number(localStorage.getItem("contador-carrito") || 0));
    };
  
    window.addEventListener("carritoActualizado", actualizarContador);
  
    actualizarContador();
  
    return () => {
      window.removeEventListener("carritoActualizado", actualizarContador);
    };
  }, []);

  return (
    <div id="carrito-container">
      <p id="num-carrito">{contador}</p>
      <FaShoppingCart />
    </div>
  );
}
