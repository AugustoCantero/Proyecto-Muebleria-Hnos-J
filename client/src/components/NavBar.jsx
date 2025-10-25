import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="textoSiena">
      <Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
}
