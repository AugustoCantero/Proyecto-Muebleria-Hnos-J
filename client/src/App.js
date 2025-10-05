import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Carrito from "./components/Carrito";
import ProductCard from "./components/ProductCard";
import ContactForm from "./components/ContactForm";

export default function App() {
  const [page, setPage] = useState("inicio");
  const [productos, setProductos] = useState([]);
  const [contacto, setContacto] = useState([]);

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
      <ContactForm />
      <Carrito />
      <Footer />
    </>
  );
}
