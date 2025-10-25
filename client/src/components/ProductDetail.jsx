import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail({ carrito, setCarrito }) {
  const { id } = useParams(); // captura el id de la URL
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [precio, setPrecio] = useState(0);

  useEffect(() => {
    setPrecio(Math.round(Math.random() * 500 + 500));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:4000/api/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Producto no encontrado");
        return res.json();
      })
      .then(data => {
        setProducto(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleAgregarCarrito = () => {
    // notificación UI
    const mensajeContainer = document.createElement("div");
    mensajeContainer.classList.add("mensaje-carrito-container");
    document.body.appendChild(mensajeContainer);

    const mensaje = document.createElement("div");
    mensaje.classList.add("mensaje-carrito");
    mensaje.textContent = "Producto añadido al carrito";
    mensajeContainer.appendChild(mensaje);

    setTimeout(() => {
      mensaje.style.opacity = 0;
      setTimeout(() => mensajeContainer.remove(), 500);
    }, 3000);

    // agregar al carrito
    setCarrito([...carrito, producto]);
  };

  if (loading) return <p style={{textAlign: 'center'}}>Cargando producto...</p>;
  if (!producto) return <p style={{textAlign: 'center'}}>No se encontró el producto.</p>;

  const detallesProducto = Object.keys(producto).slice(
    Object.keys(producto).indexOf("medidas")
  );

  return (
    <section id="producto-container">
      <div className="product-img">
        <img src={`http://localhost:4000/${producto.img}`} alt={producto.descripcion} width="400" />
      </div>

      <div className="product-info">
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>
        <table>
          <tbody>
            {detallesProducto.map((atributo) => (
              <tr key={atributo}>
                <td>{atributo}</td>
                <td>{producto[atributo]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="product-buy">
        <span>Precio: ${precio}</span>
        <button onClick={handleAgregarCarrito}>Añadir al carrito</button>
      </div>
    </section>
  );
}