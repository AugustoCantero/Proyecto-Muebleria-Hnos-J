/*Formulario de Contacto:
Debe ser un componente controlado, donde
el valor de cada input esté atado a una
variable de estado en React (useState).

Al enviar el formulario, debe hacer
console.log del OBJETO de estado que contiene
los datos del formulario y mostrar un
mensaje de éxito en la UI.
 */
import { useState } from "react";
export default function ContactForm() {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");

  const manejarEnvio = async (event) => {
    event.preventDefault();
    try {
      if (!dataForm.name || !dataForm.email || !dataForm.message) {
        setError("Por favor, complete todos los campos del formulario.");
        return;
      }
      const response = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }

      setError("Mensaje enviado con éxito. ¡Gracias por contactarnos!");
      console.log("Datos del formulario:", JSON.stringify(dataForm));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <section id="presentacion-formulario">
        <h1 id="titulo">COMPARTA SU OPINION</h1>
        <p id="subtitulo">
          En Hermanos Jota, sabemos que cada detalle cuenta, y es por ello que
          tu experiencia es nuestra máxima prioridad. Agradecemos profundamente
          el tiempo que dediques a hacernos saber tus comentarios y sugerencias,
          ya que ellos son fundamentales para seguir ofreciendo productos y
          servicios de la más alta calidad.
        </p>
      </section>
      <form onSubmit={manejarEnvio} id="form-contacto">
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            value={dataForm.name}
            name="nombre"
            onChange={(e) =>
              setDataForm({ ...dataForm, name: e.currentTarget.value })
            }
          />
          <br />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) =>
              setDataForm({ ...dataForm, email: e.currentTarget.value })
            }
            value={dataForm.email}
          />
          <br />

          <label htmlFor="mensaje">Mensaje:</label>
          <br />
          <textarea
            id="mensaje"
            name="mensaje"
            onChange={(e) =>
              setDataForm({ ...dataForm, message: e.currentTarget.value })
            }
            value={dataForm.message}
          ></textarea>
          <br />
        </div>
        <button type="submit">Enviar</button>
        {error && <div className="mensajeError">{error}</div>}
      </form>
    </div>
  );
}
