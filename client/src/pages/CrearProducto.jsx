import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CrearProducto() {
  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    stock: "",
    medidas: "",
  });

  const [extras, setExtras] = useState([]);
  const navigate = useNavigate();

  const opcionesExtras = [
    "descripcion",
    "img",
    "materiales",
    "acabado",
    "peso",
    "capacidad",
    "modulares",
    "tapizado",
    "confort",
    "rotacion",
    "garantia",
    "cargaMaxima",
    "almacenamiento",
    "caracteristicas",
    "colchon",
    "estructura",
    "relleno",
    "sostenibilidad",
    "extension",
    "apilables",
    "incluye",
    "regulacion",
    "certificacion",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExtraChange = (index, value) => {
    const newExtras = [...extras];
    newExtras[index] = value;
    setExtras(newExtras);
  };

  const addExtra = () => setExtras([...extras, ""]);

  const removeExtra = (index) => {
    const key = extras[index];
    const newExtras = extras.filter((_, i) => i !== index);
    setExtras(newExtras);

    const newFormData = { ...formData };
    if (key) delete newFormData[key];
    setFormData(newFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = { ...formData };

    extras.forEach((extra) => {
      if (extra) {
        dataToSend[extra] = formData[extra] || "";
      }
    });

    try {
      const response = await fetch(
        "https://proyecto-muebleria-hnos-j-1.onrender.com/api/products",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSend),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const nuevoProducto = data.producto;
        navigate(`/productos/${nuevoProducto._id}`);
      } else {
        alert("Error al crear producto ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Error de conexión con el servidor");
    }
  };

  return (
    <section className="crear-producto">
      <h2>Crear nuevo producto</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campos obligatorios */}
        <input
          name="nombre"
          placeholder="Nombre"
          onChange={handleChange}
          value={formData.nombre}
          required
        />
        <input
          name="precio"
          type="number"
          placeholder="Precio"
          onChange={handleChange}
          value={formData.precio}
          required
        />
        <input
          name="stock"
          type="number"
          placeholder="Stock"
          onChange={handleChange}
          value={formData.stock}
          required
        />
        <input
          name="medidas"
          placeholder="Medidas"
          onChange={handleChange}
          value={formData.medidas}
          required
        />

        {/* Extras */}
        <div className="extras">
          {extras.map((extra, index) => {
            const disponibles = opcionesExtras.filter(
              (opt) => !extras.includes(opt) || opt === extra
            );

            return (
              <div key={index} className="extra-item">
                <select
                  value={extra || ""}
                  onChange={(e) => handleExtraChange(index, e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Seleccionar atributo
                  </option>
                  {disponibles.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  placeholder="Valor"
                  value={formData[extra] || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [extra]: e.target.value,
                    })
                  }
                  disabled={extra === ""}
                  required={extra !== ""}
                />

                <button type="button" onClick={() => removeExtra(index)}>
                  ❌
                </button>
              </div>
            );
          })}
        </div>

        <button type="button" onClick={addExtra}>
          + Agregar atributo
        </button>
        <button type="submit">Crear producto</button>
      </form>
    </section>
  );
}