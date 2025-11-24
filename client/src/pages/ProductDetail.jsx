import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartProvider";

export default function ProductDetail({ carrito, setCarrito, setProductos }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);


  useEffect(() => {
    fetch(`https://proyecto-muebleria-hnos-j-1.onrender.com/api/products/${id}`)
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
    if (!producto) return;
  
    const productoParaCarrito = { ...producto };
    delete productoParaCarrito.cantidad; 
  
    addToCart(productoParaCarrito);
  
    // Notificación
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
  };
  const [error, setError] = useState("");
  
  const handleBorrarProducto = async() => {
    if (!window.confirm("¿Desea eliminar el producto?")) 
      return;
    try {
       const response = await fetch(
        `https://proyecto-muebleria-hnos-j-1.onrender.com/api/products/${producto._id}`, 
        { method: "DELETE" }
      );

      if (!response.ok) {
        throw new Error("Error en el borrado");
      }

      setProductos(prevProducts => prevProducts.filter(p => p._id !== producto._id));
      setError("Producto borrado con éxito!");
      navigate(`/productos/`)
    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  };

  if (loading) return <p style={{textAlign: 'center'}}>Cargando producto...</p>;
  if (!producto) return <p style={{textAlign: 'center'}}>No se encontró el producto.</p>;

  const atributosExcluidos = ["_id","nombre", "descripcion", "img", "stock", "precio"];

  const detallesProducto = Object.keys(producto).filter(
    (atributo) => !atributosExcluidos.includes(atributo) && producto[atributo]
  );

  return (
    <section id="producto-container">
      <div className="product-img">
        <img src={`https://proyecto-muebleria-hnos-j-1.onrender.com/${producto.img}`} alt={producto.descripcion} width="400" />
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
        <span>Precio: ${producto.precio}</span>
        <button onClick={handleAgregarCarrito}>Añadir al carrito</button>
        <button onClick={handleBorrarProducto}>Borrar producto</button>
      </div>
    </section>
  );
}