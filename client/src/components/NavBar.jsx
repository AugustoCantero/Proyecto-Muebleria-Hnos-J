import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function NavBar() {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <nav className="userOptionsContainer textoSiena">
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
      <div>
        {!currentUser ? (
          <>
            <Link to="/login">Iniciar Sesión</Link>
            <Link to="/register">Registrarse</Link>
          </>
        ) : (
          <>
            <Link to={"/"} onClick={logout}>
              Log Out
            </Link>
            <Link to="/perfil">Perfil</Link>
          </>
        )}
      </div>
    </nav>
  );
}
