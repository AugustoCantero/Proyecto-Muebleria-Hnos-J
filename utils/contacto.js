/* Página de Contacto (contacto.html):
"Nuestros clientes suelen tener preguntas.
Necesitamos un formulario simple para que
nos dejen sus dudas. Debe validar que la
información sea correcta."
Un formulario con campos para "Nombre", "Email" y "Mensaje".
Debe tener validación del lado del cliente con JavaScript.
Al enviar, debe 
mostrar un mensaje de éxito en la página usando manipulación del DOM.
 */
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita el envío del formulario
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  // Validación simple
  if (nombre === "" || email === "" || mensaje === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Si la validació exitosa, muestra un mensan esje de éxito
  const main = document.querySelector("main");
  const mensajeExito = document.createElement("p");
  mensajeExito.classList.add("mensajeExito");
  mensajeExito.textContent = "¡Mensaje enviado con éxito!";
  main.appendChild(mensajeExito);
});
