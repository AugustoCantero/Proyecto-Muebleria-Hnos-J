import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Carrito from "./components/Carrito";
import ProductCard from "./components/ProductCard";

async function getProducts() {
  try {
    const data = await fetch("http://localhost:4000/api/products");
    if (!data.ok) throw new Error("Error en la petición: " + data.status);
    return await data.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

let loaded = false;

export default function App() {
  const [page, setPage] = useState("inicio");
  const [productos, setProductos] = useState([]);

  if (!loaded) {
    getProducts().then((res) => setProductos(res));
    loaded = true; // asegura que solo se ejecute una vez
  }

  return (
    <>
      <Header setPage={setPage} />
      <main className="mainContent">
        <section className="hero">
          <h1 className="textoSiena">Bienvenido a Hermanos Jota</h1>
          <p>Artesanía en madera con historia y diseño moderno.</p>
        </section>

        <section className="productos-destacados">
          <h2>Productos Destacados</h2>
          <div className="grid" id="productos-destacados">
            {productos.slice(0, 4).map((prod) => (
              <ProductCard key={prod.id} props={prod} />
            ))}
          </div>
        </section>
      </main>
      <Carrito />
      <Footer />
    </>
  );
}
