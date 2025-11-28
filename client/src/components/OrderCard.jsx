import { useNavigate } from "react-router-dom";

export default function OrderCard({ order }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/user/pedidos/${order._id}`)}
      className="order-card"
    >
      <span className="label">ID de orden:</span>
      <span className="value">{order._id}</span>

      <span className="label">Fecha de creación:</span>
      <span className="value">
        {new Date(order.createdAt).toLocaleDateString()}
      </span>

      <span className="label">Total:</span>
      <span className="value">${order.totalAmount}</span>
    </div>
  );
}
