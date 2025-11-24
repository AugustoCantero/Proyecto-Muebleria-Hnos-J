import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function OrderDetail() {
  const { id } = useParams();
  const [pedido, setPedido] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://proyecto-muebleria-hnos-j-1.onrender.com/api/orders/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Pedido no encontrado");
        return res.json();
      })
      .then(data => {
        setPedido(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p style={{ textAlign: "center" }}>Cargando pedido...</p>;
  if (!pedido) return <p style={{ textAlign: "center" }}>No se encontró el pedido.</p>;

  return (
    <section id="table-wrapper">
      <div id="order-card">
        <h2 style={{ textAlign: "center" }}>Pedido #{id}</h2>

        {/* NOTA DEL PEDIDO */}
        {pedido.nota && (
          <p id="order-note" style={{ marginTop: "1rem", fontStyle: "italic", color: "#555" }}>
            <strong>Nota:</strong> {pedido.nota}
          </p>
        )}

        <table id="order-table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
            </tr>
          </thead>
          <tbody>
            {pedido.products && pedido.products.length > 0 ? (
              pedido.products.map(item => (
                <tr key={item._id}>
                  <td>{item.productId.nombre}</td>
                  <td style={{ textAlign: "center" }}>{item.quantity}</td>
                  <td style={{ textAlign: "center" }}>${item.productId.precio}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{ textAlign: "center" }}>No hay productos en este pedido.</td>
              </tr>
            )}
          </tbody>
        </table>

        <div id="order-total">
          Total del pedido: ${pedido.totalAmount}
        </div>
      </div>
    </section>
  );
}
