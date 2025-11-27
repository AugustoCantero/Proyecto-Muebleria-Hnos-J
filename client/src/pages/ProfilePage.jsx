import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import OrderCard from "../components/OrderCard";

export default function ProfilePage() {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await fetch("https://proyecto-muebleria-hnos-j-1.onrender.com/api/orders", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!response.ok) {
        throw new Error("Error fetching orders");
      }
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error(error);
      navigate("/login");
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  if (!currentUser) return <p>Cargando usuario...</p>;

  return (
    <section className="profile-page">
      <h1>Hola {currentUser.username} 👋</h1>
      <div>
        <h2 className="orders-title">Pedidos</h2>
        {orders.length === 0 ? (
          <p className="no-orders-message">
            No has realizado ningún pedido aún.
          </p>
        ) : (
          <div>
            {/* DESKTOP  */}
            <table className="orders-table">
              <thead className="orders-table-head">
                <tr className="orders-table-row">
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody className="orders-table-body">
                {orders.map((order) => (
                  <tr
                    onClick={() => navigate(`/user/pedidos/${order._id}`)}
                    key={order._id}
                    className="orders-table-row"
                  >
                    <td>{order._id}</td>
                    <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                    <td>${order.totalAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* MOBILE  */}
            {orders.map((order) => (
              <OrderCard key={order._id} order={order} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
