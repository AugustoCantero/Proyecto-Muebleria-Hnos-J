export default function ProductCard({ props, setPage }) {
  return (
    <article onClick={() => setPage(`${props.id}`)} className="articuloDeProducto">
      <img src={`http://localhost:4000/${props.img}`} alt={props.nombre} />

      <div>
        <h2>{props.nombre}</h2>
        <p>{props.descripcion}</p>
      </div>
    </article>
  );
}
