import ProductCard from "../components/ProductCard";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProductList({ productos, loading, error }) {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [valueFilter, setValueFilter] = useState("");

  function stringCleaner(palabras) {
    return palabras
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  if (loading)
    return <p style={{ textAlign: "center" }}>Cargando productos...</p>;
  if (error)
    return (
      <p style={{ textAlign: "center" }}>
        Error al cargar productos {error.message}
      </p>
    );
  return (
    <>
      <section id="presentacion-productos">
        <h1>PRODUCTOS</h1>
        <p>
          En Hermanos Jota, nuestros productos no son simples muebles: son
          fragmentos de herencia reinventados para tu presente. Descubrí diseños
          creados con materiales sustentables y un espíritu artesanal que
          combina tradición y modernidad.
        </p>
      </section>

      <form id="form-search">
        <input
          autoComplete="off"
          type="text"
          id="search"
          placeholder="Buscar aquí..."
          onChange={(e) => setValueFilter(e.target.value)}
        />
      </form>

      {currentUser?.role === "admin" && (
        <button onClick={() => navigate(`/admin/crear-producto`)}>
          Crear nuevo producto
        </button>
      )}

      <section id="productos-container">
        {productos
          .filter(
            (prod) =>
              stringCleaner(prod.nombre).includes(stringCleaner(valueFilter)) ||
              stringCleaner(prod.descripcion).includes(
                stringCleaner(valueFilter)
              )
          )
          .map((prod) => (
            <ProductCard key={prod._id} producto={prod} />
          ))}
      </section>
    </>
  );
}
