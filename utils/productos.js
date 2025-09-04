const inputSearch = document.getElementById("search");
const productosContainer = document.getElementById("productos-container");

async function getProductos() {
  productosContainer.innerHTML = "";
  productos.forEach((product) => {
    productosContainer.innerHTML += `
    <article class="articuloDeProducto">
        <a class="linkAProducto" href="producto.html?id=${product.id}">
            <img src="${product.img}" alt="${product.nombre}"/> 
            <div class="infoDeArticulo">
                <h1>${product.nombre}</h1>
                <p>${product.descripcion}</p>
            </div>
        </a>
    </article>
    `;
  });
}

let loading = true;
if (loading) {
  productosContainer.innerHTML = "<h1 class='cargando'>Cargando...</h1>";
}
setTimeout(() => {
  getProductos();
  loading = false;
}, 1500);
