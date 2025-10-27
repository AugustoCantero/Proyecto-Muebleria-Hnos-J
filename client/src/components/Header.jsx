import NavBar from "./NavBar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src="/logo.svg" alt="Muebleria Hermanos Jota" />
      </Link>
      <NavBar />
    </header>
  );
}
