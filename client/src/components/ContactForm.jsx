/*Formulario de Contacto:
Debe ser un componente controlado, donde
el valor de cada input esté atado a una
variable de estado en React (useState).

Al enviar el formulario, debe hacer
console.log del OBJETO de estado que contiene
los datos del formulario y mostrar un
mensaje de éxito en la UI.
 */
import { useState } from 'react';
export default function ContactForm(){
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');

    const manejarCambioNombre = (event) => setNombre(event.target.value);
    const manejarCambioEmail = (event) => setEmail(event.target.value);
    const manejarCambioMensaje = (event) => setMensaje(event.target.value);

    const manejarEnvio = (event) => {
        event.preventDefault(); // Evita el envio predeterminado del formulario
        if (!nombre || !email || !mensaje) {
            setError('Por favor, complete todos los campos del formulario.');
            return;
        }
        setError('Mensaje enviado con éxito. ¡Gracias por contactarnos!');
        const datosFormulario = { nombre, email, mensaje };
        console.log('Datos del formulario:', JSON.stringify(datosFormulario));
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
                <label for="nombre">Nombre:</label>
                <input type="text" value={nombre} name="nombre" onChange={manejarCambioNombre}/><br />

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" onChange={manejarCambioEmail}/><br />

                <label for="mensaje">Mensaje:</label><br />
                <textarea id="mensaje" name="mensaje" onChange={manejarCambioMensaje}></textarea><br />
            </div>
            <button type="submit">Enviar</button>
            {error && (
                <div className="mensajeError">
                    {error}
                </div>
            )}
        </form>
    </div>
    );
}
    


      
