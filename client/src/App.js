import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Carrito from "./components/Carrito";
import ProductDetail from "./pages/ProductDetail";
import ProductCard from "./components/ProductCard";
import ProductList from "./pages/ProductList";
import ContactForm from "./pages/ContactForm";
import CrearProducto from "./pages/CrearProducto";
import EditarProducto from "./pages/EditarProducto";

export default function App() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Traer productos desde el backend
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
    <Router>
      <Header />
      <main>
        <Routes>
          {/* HOME */}
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

          {/* LISTA DE PRODUCTOS */}
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

          {/* CONTACTO */}
          <Route path="/contacto" element={<ContactForm />} />

          {/* DETALLE DE PRODUCTO */}
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
          {/* CREAR PRODUCTO */}
          <Route
            path="/admin/crear-producto"
            element={<CrearProducto setProductos={setProductos} />}
          />
        <Route
            path="/admin/editar-producto/:id"
            element={<EditarProducto />}
          />
        </Routes>
      </main>

      <Carrito carrito={carrito} />
      <Footer />
    </Router>
  );
}
