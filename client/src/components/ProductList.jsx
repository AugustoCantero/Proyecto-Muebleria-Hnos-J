import ProductCard from "./ProductCard";
import { useState } from "react";

export default function ProductList({ productos, setPage }) {
  const [loading, setLoading] = useState(true);
  const [valueFilter, setValueFilter] = useState("");
  setTimeout(() => {
    setLoading(false);
  }, 1600);

  function stringCleaner(palabras) {
    return palabras
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }
  return (
    <>
      {loading ? (
        <p style={{ textAlign: "center" }}>Cargando productos...</p>
      ) : (
        <>
          <section id="presentacion-productos">
            <h1>PRODUCTOS</h1>
            <p>
              En Hermanos Jota, nuestros productos no son simples muebles: son
              fragmentos de herencia reinventados para tu presente. Descubrí
              diseños creados con materiales sustentables y un espíritu
              artesanal que combina tradición y modernidad.
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

          <section id="productos-container">
            {productos
              .filter((prod) => {
                if (
                  stringCleaner(prod.nombre).includes(
                    stringCleaner(valueFilter)
                  ) ||
                  stringCleaner(prod.descripcion).includes(
                    stringCleaner(valueFilter)
                  )
                ) {
                  return prod;
                }
              })
              .map((prod) => (
                <ProductCard setPage={setPage} key={prod.id} props={prod} />
              ))}
          </section>
        </>
      )}
    </>
  );
}
