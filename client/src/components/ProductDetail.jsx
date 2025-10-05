import { useEffect, useState } from "react";

export default function ProductDetail({ productId }) {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [contadorCarrito, setContadorCarrito] = useState(
    Number(localStorage.getItem("contador-carrito") || 0)
  );
  const [precio, setPrecio] = useState(0);


  useEffect(() => {
    setPrecio(Math.round(Math.random() * 500 + 500));
  }, []);

  useEffect(() => {
    if (!productId) return;

    console.log(`http://localhost:4000/api/products/${productId}`)
    fetch(`http://localhost:4000/api/products/${productId}`)
      .then((res) => {
        console.log('algo');

        if (!res.ok) throw new Error("Producto no encontrado");

        return res.json();
      })
      .then((data) => {
        setProducto(data);
        setLoading(false);
        console.log('algo');
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleAgregarCarrito = () => {
    const nuevoContador = contadorCarrito + 1;
    setContadorCarrito(nuevoContador);
    localStorage.setItem("contador-carrito", nuevoContador);

    window.dispatchEvent(new Event("carritoActualizado"));
  
    const mensajeContainer = document.createElement("div");
    mensajeContainer.classList.add("mensaje-carrito-container");
    document.body.appendChild(mensajeContainer);
  
    const mensaje = document.createElement("div");
    mensaje.classList.add("mensaje-carrito");
    mensaje.textContent = "Producto añadido al carrito";
    mensajeContainer.appendChild(mensaje);
  
    setTimeout(() => {
      mensaje.style.opacity = 0;
      setTimeout(() => {
        mensajeContainer.remove();
      }, 500);
    }, 3000);
  };

  if (loading) return <p>Cargando producto...</p>;
  if (!producto) return <p>No se encontró el producto.</p>;

  const imagenUrl = producto.img;
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
        <p>{producto.descripcionCompleta}</p>
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