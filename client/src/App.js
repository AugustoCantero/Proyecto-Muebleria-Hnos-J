import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Carrito from "./components/Carrito";
import ProductCard from "./components/ProductCard";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";
import ContactForm from "./pages/ContactForm";
import CrearProducto from "./pages/CrearProducto";
import EditarProducto from "./pages/EditarProducto";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import OrderDetail from "./pages/OrderDetail";

import { CartProvider } from "./contexts/CartProvider";

export default function App() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Carga el carrito desde localStorage al iniciar
  useEffect(() => {
    const saved = localStorage.getItem("carrito");
    if (saved) {
      try {
        setCarrito(JSON.parse(saved));
      } catch (e) {
        console.error("Error al parsear carrito", e);
      }
    }
  }, []);

  // Guarda el carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  // Trae productos desde el backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetch(
          "https://proyecto-muebleria-hnos-j-1.onrender.com/api/products"
        );
        if (!data.ok) throw new Error("Error en la petición: " + data.status);
        const response = await data.json();
        setProductos(response);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <CartProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section className="hero">
                    <h1 className="textoSiena">Bienvenido a Hermanos Jota</h1>
                    <p>Artesanía en madera con historia y diseño moderno.</p>
                  </section>

                  <section className="productos-destacados-container">
                    <h1>PRODUCTOS DESTACADOS</h1>
                    <div className="grid" id="productos-destacados">
                      {productos.slice(0, 4).map((prod) => (
                        <ProductCard key={prod._id} producto={prod} />
                      ))}
                    </div>
                  </section>
                </>
              }
            />

            <Route
              path="/productos"
              element={
                <ProductList
                  loading={loading}
                  error={error}
                  productos={productos}
                />
              }
            />

            <Route path="/contacto" element={<ContactForm />} />
            <Route
              path="/productos/:id"
              element={
                <ProductDetail
                  setProductos={setProductos}
                  carrito={carrito}
                  setCarrito={setCarrito}
                />
              }
            />
            <Route
              path="/admin/crear-producto"
              element={<CrearProducto setProductos={setProductos} />}
            />
            <Route path="/admin/editar-producto/:id" element={<EditarProducto />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/perfil" element={<ProfilePage />} />
            <Route path="/pedidos/:id" element={<OrderDetail />} />
          </Routes>
        </main>

        {/* Icono del carrito */}
        <Carrito carrito={carrito} />

        <Footer />
      </Router>
    </CartProvider>
  );
}
