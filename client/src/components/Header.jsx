import NavBar from "./NavBar";
export default function Header({ setPage }) {
  const handleSetPage = (e) => {
    setPage(e.currentTarget.textContent.toLowerCase());
  };
  return (
    <header>
      <img src="/logo.svg" alt="Muebleria Hermanos Jota" />
      <NavBar setPage={setPage} />
    </header>
  );
}
