export default function Header({ setPage }) {
  const handleSetPage = (e) => {
    setPage(e.currentTarget.textContent.toLowerCase());
  };
  return (
    <header>
      <img src="/logo.svg" alt="Muebleria Hermanos Jota" />
      <nav className="textoSiena">
        <button onClick={handleSetPage}>Inicio</button>
        <button onClick={handleSetPage}>Productos</button>
        <button onClick={handleSetPage}>Contacto</button>
      </nav>
    </header>
  );
}
