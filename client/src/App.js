import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Carrito from "./components/Carrito";
import ProductDetail from "./components/ProductDetail";

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
  console.log(page);
  return (
    <>
      <Header setPage={setPage} />
      <main className="mainContent">
      </main>
      <Carrito />
      <Footer />
    </>
  );
}
