import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import OrderCard from "../components/OrderCard";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([
    {
      _id: 1,
      user: {
        _id: "691f85929ee9fe8c3652a169",
        username: "TEST_USER_DO_NOT_USE",
        email: "test.user+dummy@jota-pruebas.com",
        password: "TEST_PASSWORD_1234",
      },
      products: [
        {
          _id: "68f62fda22cc53dbca429ad2",
          nombre: "Aparador Uspallata",
          img: "assets/Aparador Uspallata.png",
          descripcion:
            "Aparador de seis puertas fabricado en nogal sostenible...",
          medidas: "180 × 45 × 75 cm",
          materiales: "Nogal macizo FSC®, herrajes de latón",
          acabado: "Aceite natural ecológico",
          peso: "68 kg",
          capacidad: "6 compartimentos interiores",
          stock: 10,
          precio: 5000,
          quantity: 1,
        },
        {
          _id: "690657f3714ff233f4c715a1",
          nombre: "Cama Neuquén",
          descripcion: "Cama plataforma con cabecero flotante tapizado...",
          precio: 100000,
          stock: 10,
          img: "assets/Cama Neuquén.png",
          medidas: "160 x 200 x 90 cm",
          materiales: "Roble macizo FSC®, tapizado lino",
          acabado: "Aceite natural",
          caracteristicas: "Cabecero flotante acolchado",
          colchon: "Compatible con colchón 160×200",
          quantity: 1,
        },
        {
          _id: "690658aa714ff233f4c715ab",
          nombre: "Silla de Trabajo Belgrano",
          descripcion: "Silla ergonómica regulable con respaldo de malla...",
          precio: 62000,
          stock: 10,
          img: "assets/Silla de Trabajo Belgrano.png",
          medidas: "60 × 60 × 90-100 cm",
          materiales: "Malla técnica, tejido reciclado",
          acabado: "Base cromada",
          regulacion: "Altura + inclinación",
          certificacion: "EN 1335",
          quantity: 2,
        },
      ],
      totalAmount: 229000,
    },
    {
      _id: 2,
      user: {
        _id: "691f85929ee9fe8c3652a169",
        username: "TEST_USER_DO_NOT_USE",
        email: "test.user+dummy@jota-pruebas.com",
        password: "TEST_PASSWORD_1234",
      },
      products: [
        {
          _id: "68f62fda22cc53dbca429ad2",
          nombre: "Aparador Uspallata",
          img: "assets/Aparador Uspallata.png",
          descripcion:
            "Aparador de seis puertas fabricado en nogal sostenible...",
          medidas: "180 × 45 × 75 cm",
          materiales: "Nogal macizo FSC®, herrajes de latón",
          acabado: "Aceite natural ecológico",
          peso: "68 kg",
          capacidad: "6 compartimentos interiores",
          stock: 10,
          precio: 5000,
          quantity: 1,
        },
        {
          _id: "690657f3714ff233f4c715a1",
          nombre: "Cama Neuquén",
          descripcion: "Cama plataforma con cabecero flotante tapizado...",
          precio: 100000,
          stock: 10,
          img: "assets/Cama Neuquén.png",
          medidas: "160 x 200 x 90 cm",
          materiales: "Roble macizo FSC®, tapizado lino",
          acabado: "Aceite natural",
          caracteristicas: "Cabecero flotante acolchado",
          colchon: "Compatible con colchón 160×200",
          quantity: 1,
        },
        {
          _id: "690658aa714ff233f4c715ab",
          nombre: "Silla de Trabajo Belgrano",
          descripcion: "Silla ergonómica regulable con respaldo de malla...",
          precio: 62000,
          stock: 10,
          img: "assets/Silla de Trabajo Belgrano.png",
          medidas: "60 × 60 × 90-100 cm",
          materiales: "Malla técnica, tejido reciclado",
          acabado: "Base cromada",
          regulacion: "Altura + inclinación",
          certificacion: "EN 1335",
          quantity: 2,
        },
      ],
      totalAmount: 229000,
    },
  ]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    // Fetch user orders from the backend
  }, []);

  return (
    <section className="profile-page">
      <h1>Hola currentUser.username 👋</h1>
      <div>
        <h2 className="orders-title">Pedidos</h2>
        {orders.length === 0 ? (
          <p className="no-orders-message">
            No has realizado ningún pedido aún.
          </p>
        ) : (
          <div>
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
                    onClick={() => navigate(`/pedidos/${order._id}`)}
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
            {orders.map((order) => (
              <OrderCard key={order._id} order={order} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
