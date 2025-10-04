
document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("productos-destacados");
    const productosDestacados = productos.slice(0, 4);

    productosDestacados.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("producto");
        card.innerHTML = `
            <a style="text-decoration: none" href="producto.html?id=${producto.id}">
                <img src="${producto.img}" alt="${producto.nombre}">
                <h3 style="color: brown;">${producto.nombre}</h3>
                <p class="textoSiena">${producto.descripcion}</p>
            </a>
            `;
            contenedor.appendChild(card);
        });
    
});
