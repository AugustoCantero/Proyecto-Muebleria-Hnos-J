export default function Header({ setPage }) {
  return (
    <header>
      <img src="/logo.svg" alt="Muebleria Hermanos Jota" />
      <nav className="textoSiena">
        <a onClick={(e) => setPage(e.currentTarget.textContent.toLowerCase())}>
          Inicio
        </a>
        <a onClick={(e) => setPage(e.currentTarget.textContent.toLowerCase())}>
          Productos
        </a>
        <a onClick={(e) => setPage(e.currentTarget.textContent.toLowerCase())}>
          Contacto
        </a>
      </nav>
    </header>
  );
}
