import { useNavigate } from "react-router-dom";

export default function OrderCard({ order }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/admin/pedidos/${order._id}`)}
      className="order-card"
    >
      <span className="label">Order ID:</span>
      <span className="value">{order._id}</span>

      <span className="label">Date:</span>
      <span className="value">
        {new Date(order.createdAt).toLocaleDateString()}
      </span>

      <span className="label">Total:</span>
      <span className="value">${order.totalAmount}</span>
    </div>
  );
}
