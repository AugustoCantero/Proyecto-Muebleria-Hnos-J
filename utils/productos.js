const inputSearch = document.getElementById("search");
const productosContainer = document.getElementById("productos-container");
const formSearch = document.getElementById("form-search");

// Funcion que añade cada producto al main (productosContainer)
function showProduct(product) {
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
}

// iteracion de productos ( todos o por filtrado)
async function getProductos(filter = "") {
  productosContainer.innerHTML = "<h1 class='cargando'>Cargando...</h1>";
  await delay(1500);

  productosContainer.innerHTML = "";
  productos.forEach((product) => {
    if (filter !== "") {
      if (
        product.nombre.toLowerCase().includes(filter.toLowerCase()) ||
        product.descripcion.toLowerCase().includes(filter.toLowerCase())
      ) {
        showProduct(product);
      }
    } else {
      showProduct(product);
    }
  });
}

// Simulacion de asincronía
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Events
inputSearch.addEventListener("input", (e) => {
  getProductos(e.target.value);
});

formSearch.addEventListener("submit", (e) => {
  e.preventDefault();
});

getProductos();
