# Equipo 6

## Página web de **Mueblería Hermanos Jota**
[Link de despliegue Frontend - Vercel](https://proyecto-muebleria-hnos-j.vercel.app/)

[Link de despliege Backend - Render](https://proyecto-muebleria-hnos-j-1.onrender.com)

### Participantes

* Augusto Cantero
* Jeronimo Lautaro Cardu Goldsworthy
* Amir Ale

---
# Instrucciones

## Instalacion de dependencias
En la terminal, estando situado en la carpeta del Backend con "cd backend", hacemos "npm install". y repetimos lo mismo en la carpeta del cliente ("cd client")
Eso instalaria todas las dependencias en las versiones especificas que usa el proyecto

# Correr el proyecto
### Forma local
En la terminal, vamos a situarnos en la carpeta del **/backend** y alli hacer "npm run dev" ( inicializando el server en el puerto 4000)
Luego vamos a otra terminal (si no tenes otra, la creas dandole al signo mas arriba a la derecha en la ventana de la terminal), en la carpeta **/client** hacemos
"npm start"
### Forma remota
Tanto el frontend como el backend ya estan corriendo en un servidor. (vercel y render)

# Uso de la API
*/* -> Bienvenida a la api (uso para pruebas de funcionamiento)

*/api/products* -> Lista de productos en formato JSON

*/api/products/:id* -> Datos de un producto en especifico en formato JSON

*/api/orders* -> Lista de ordenes en formato JSON

*/api/orders/:id* -> Datos de una orden en especifico en formato JSON

*/api/contacts* -> Lista de consultas que se hagan en el formulario de contacto

# Arquitectura y Desiciones tomadas

Para la estructura del proyecto dividimos backend de frontend.
## Backend
*/assets* -> Imagenes del proyecto
*/routes* -> uso de expressRouter() para peticiones HTTP a la API y manejo de errores
*/middlewares* -> logger para muestreo de peticiones HTTP a la API
*/models* -> Contiene los modelos de los productos y consultas que se almacenan en la bbdd
*server.js* -> Inicializador del servidor backend
*db.js* -> Conexion a la base de datos con Mongo Atlas

### .env
Usamos variables de entorno que contiene la URI de la bbdd en atlas

## Frontend
*/public* -> Contendor del archivo HTML donde se encuentra el elemento #root para el renderizado con React
*/src/components* -> Todos los componentes hechos con React, usados en la pagina web
*/src/pages* -> Contiene cada pagina de la web 
*App.js* -> Componente principal donde se realizan los re-renderizados condicionales (simulando uso de ReactRouter)
*App.css y index.css* -> Contienen los estilos de los componentes y la pagina web

# Decisiones Tomadas
- El componente del carrito lo dejamos como un estilo *absolute* para acompañe el scroll. (posible cambios en el futuro)
- De momento, en /admin/crear-producto y /editar-producto solo se pueden seleccionar atributos ya existentes.

# Funcionalidad
* Login
* Registro
* Ver productos
* Agregar productos al carrito
* Realizar consultas
* Ver perfil del usuario
* Ver Pedidos realizados
* Crear productos (admin)
* Editar productos (admin)
* Eliminar productos (admin)

## Home
Breve presentacion de la marca y bienvenida a la web, seguida de una lista de productos destacados.

## Productos
Lista de todos los productos en venta de la empresa junto a su nombre y descripción. Tambien incluye un buscador funcional para poder filtrar.

## Producto
Seccion donde muestra más detalladamente el producto que elegiste en la anterior lista, mostrando sus detalles y precio. Con la posibilidad de agregar el producto al carrito o eliminarlo

## Contacto
Donde podes dejar reseñas/preguntas sobre nuestros productos.

## Perfil
Seccion donde poder ver los pedidos que realizaste con el precio final y la fecha.

## Pedido
Seccion donde muestra más detalladamente el pedido que elegiste en la anterior lista, mostrando los productos comprados, la cantidad y precio de c/u, precio total y Fecha de realización.

## Usuario
### Registro
Pagian donde creas tu cuenta en el web
### Login 
Pagina donde inicias sesion a tu cuenta 


## Del lado del Admin
### Crear-Producto
Pagina que contiene un formulario para crear productos.

### Editar-Producto
Pagina que contiene un formulario para editar un producto.

---

# Componentes Complementarios

## Header
Barra de navegación de la web junto al logo de "Hermanos Jota"

## Footer
Información general sobre la empresa, como dirección, horarios y contacto.tos de contacto

## Carrito
"Boton flotante" donde te dice la cantidad de productos que tenes en tu carrito que proximamente te llevara a tu carrito.

## CartList
Lista de productos agregados al carrito desde la pagina de los mismos (ProductDetail) mostrando su cantidad y precio final (precio del producto * cantidad) y abajo del todo el precio total del carrito. A su vez en el mismo carrito se pueden agregar/disminuir las cantidades o eliminar un producto de la lista.

## ProductCard
Informacion resumida de un producto, que te redirige a la pagina del mismo.

## OrderCard
Informacion resumida de un pedido, que te redirige a la pagina del mismo.

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
* React-router-dom
* MongoDB
* Mongoose
* cors
* dotenv
* JWT
* JWT decode
* useContext
* AuthContext

