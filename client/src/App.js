import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Carrito from "./components/Carrito";
import ProductDetail from "./components/ProductDetail";
import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";

export default function App() {
  const [page, setPage] = useState("inicio");
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetch("http://localhost:4000/api/products");
        if (!data.ok) throw new Error("Error en la petición: " + data.status);
        const response = await data.json();
        setProductos(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetch("http://localhost:4000/api/products");
        if (!data.ok) throw new Error("Error en la petición: " + data.status);
        const response = await data.json();
        setProductos(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header setPage={setPage} />
      <main>
        {page === "inicio" ? (
          <>
            <section className="hero">
              <h1 className="textoSiena">Bienvenido a Hermanos Jota</h1>
              <p>Artesanía en madera con historia y diseño moderno.</p>
            </section>

            <section className="productos-destacados-container">
              <h1>PRODUCTOS DESTACADOS</h1>
              <div className="grid" id="productos-destacados">
                {productos.slice(0, 4).map((prod) => (
                  <ProductCard setPage={setPage} key={prod.id} props={prod} />
                ))}
              </div>
            </section>
          </>
        ) : page === "productos" ? (
          <>
            <ProductList setPage={setPage} productos={productos} />
          </>
        ) : page === "contacto" ? (
          <h1>Página de contacto</h1>
        ) : (
          <ProductDetail productId={page} />
        )}
      </main>

      <Carrito />
      <Footer />
    </>
  );
}
