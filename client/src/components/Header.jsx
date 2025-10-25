import NavBar from "./NavBar";
export default function Header({ setPage }) {
  return (
    <header>
      <img src="/logo.svg" alt="Muebleria Hermanos Jota" />
      <NavBar setPage={setPage} />
    </header>
  );
}
