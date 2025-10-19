import { Link } from "react-router-dom";

export default function ProductCard({ producto }) {
  return (
    <article className="articuloDeProducto">
      <Link to={`/productos/${producto.id}`}>
        <img src={`http://localhost:4000/${producto.img}`} alt={producto.nombre} />
        <div>
          <h2>{producto.nombre}</h2>
          <p>{producto.descripcion}</p>
        </div>
      </Link>
    </article>
  );
}