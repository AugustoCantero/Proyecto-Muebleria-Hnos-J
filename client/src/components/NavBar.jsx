export default function NavBar({ setPage }) {
  const handleSetPage = (e) => {
    setPage(e.currentTarget.textContent.toLowerCase());
  };
  return (
    <nav className="textoSiena">
      <button onClick={handleSetPage}>Inicio</button>
      <button onClick={handleSetPage}>Productos</button>
      <button onClick={handleSetPage}>Contacto</button>
    </nav>
  );
}
