export default function ProductCard({ props }) {
  return (
    <article className="producto">
      <img src={`http://localhost:4000/${props.img}`} alt={props.nombre} />
      <h1>{props.nombre}</h1>
      <p>{props.descripcion}</p>
    </article>
  );
}
