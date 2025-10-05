# Equipo 6

## Página web de **Mueblería Hermanos Jota**
[Link de despliegue](https://proyecto-muebleria-hnos-j.vercel.app/)

### Participantes

* Augusto Cantero
* Jeronimo Lautaro Cardu Goldsworthy
* Amir Ale

---
# Instrucciones

## Instalacion de dependencias
En la terminal, estando situado en la carpeta del Backend con "cd backend", hacemos "npm install". y repetimos lo mismo en la carpeta del cliente ("cd client")
Eso instalaria todas las dependencias en las versiones especificas que usa el proyecto

## Correr el proyecto
En la terminal, vamos a situarnos en la carpeta del **/backend** y alli hacer "npm run dev" ( inicializando el server en el puerto 4000)
Luego vamos a otra terminal (si no tenes otra, la creas dandole al signo mas arriba a la derecha en la ventana de la terminal), en la carpeta **/client** hacemos
"npm start"

## Uso de la API
*/* -> Bienvenida a la api (uso para pruebas de funcionamiento)
*/api/products* -> Lista de productos en formato JSON
*/api/products/:id* -> Datos de un producto en especifico en formato JSON

# Arquitectura y Desiciones tomadas

Para la estructura del proyecto dividimos backend de frontend.
### Backend
*/assets* -> Imagenes del proyecto
*/routes* -> uso de expressRouter() para peticiones HTTP a la API y manejo de errores
*/middlewares* -> logger para muestreo de peticiones HTTP a la API
*arhivo.js* -> lista de productos
*server.js* -> Inicializador del servidor backend

### Frontend
*/public* -> Contendor del archivo HTML donde se encuentra el elemento #root para el renderizado con React
*/src/components* -> Todos los componentes hechos con React, usados en la pagina web
*App.js* -> Componente principal donde se realizan los re-renderizados condicionales (simulando uso de ReactRouter)
*App.css y index.css* -> Contienen los estilos de los componentes y la pagina web

# Decisiones Tomadas
- El componente del carrito lo dejamos como un estilo *absolute* para acompañe el scroll. (posible cambios en el futuro)

# Funcionalidad
Creación de una pagina web estatica con tres secciones.

## Home
Breve presentacion de la marca y bienvenida a la web, seguida de una lista de productos destacados.

## Productos
Lista de todos los productos en venta de la empresa junto a su nombre y descripción. Tambien incluye un buscador funcional para poder filtrar.

## Producto
Seccion donde muestra más detalladamente el producto que elegiste en la anterior lista, mostrando sus detalles y precio. Con la posibilidad de agregar el producto al carrito.

## Contacto
Donde podes dejar reseñas/preguntas sobre nuestros productos.

---

# Componentes Complementarios

## Header
Barra de navegación de la web junto al logo de "Hermanos Jota"

## Footer
Información general sobre la empresa, como dirección, horarios y contacto.tos de contacto

## Carrito
"Boton flotante" donde te dice la cantidad de productos que tenes en tu carrito que proximamente te llevara a tu carrito.
(Funcionando con el boton de /producto - usando localStorage) 

---

# Tecnologías implementadas

* HTML
* CSS
* JavaScript
* GIT y GitHub
* NodeJS + Express
* Nodemon
* React
* React-icons

