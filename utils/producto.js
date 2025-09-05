const productId = Number(new URLSearchParams(window.location.search).get("id"));
const producto = productos[productId]

const productTitle = document.getElementById('titulo-producto')
productTitle.textContent = producto.nombre



const container = document.getElementById('producto-container')

// div de la imagen

const divImg = document.createElement('div')
divImg.classList.add('product-img')

const imgURL = document.createElement('img')
imgURL.src = producto.img
imgURL.alt = producto.descripcion
divImg.appendChild(imgURL)

//div info

const divInfo = document.createElement('div')
divInfo.classList.add('product-info')

const titulo = document.createElement('h3')
titulo.textContent = producto.nombre


const descripcion = document.createElement('p')
descripcion.textContent = producto.descripcionCompleta

// tabla detalles producto

const atributos = Object.keys(producto);
const detallesProducto = atributos.slice(atributos.indexOf("medidas"))
const tablaDetalles = document.createElement('table')


detallesProducto.forEach(atributo => {
    const tr = document.createElement('tr')

    const td = document.createElement('td')
    td.textContent = atributo
    tr.appendChild(td)

    const infoTd = document.createElement('td')
    infoTd.textContent = producto[atributo]
    tr.appendChild(infoTd)

    tablaDetalles.appendChild(tr)
});


const divCompra = document.createElement('div')
divCompra.classList.add('product-buy')

const precio = document.createElement('span')
precio.textContent = `Precio: $${Math.round(Math.random() * 500 + 500)}`

const boton = document.createElement('button')
boton.textContent = 'Añadir al carrito' 


if(!localStorage.getItem('contador-carrito')){
    localStorage.setItem('contador-carrito',0)
}

let contadorCarrito = Number(localStorage.getItem('contador-carrito'))
const contador = document.createElement('span')
contador.textContent = contadorCarrito


boton.addEventListener('click', ()=> {
    contadorCarrito += 1;
    localStorage.setItem('contador-carrito', contadorCarrito)
    contador.textContent = contadorCarrito
    mostrarMensaje('Producto añadido al carrito')
})


function mostrarMensaje(texto){ 

    const mensajeContainer = document.createElement('div')
    mensajeContainer.classList.add('mensaje-carrito-container')
    document.body.appendChild(mensajeContainer)

    const mensaje = document.createElement('div')
    mensaje.classList.add('mensaje-carrito')
    mensaje.textContent = texto

    mensajeContainer.appendChild(mensaje)

    setTimeout(() => {
        mensaje.style.opacity = 0
        setTimeout(() => {
          mensaje.remove()
        }, 500);
      }, 2000);
}




divInfo.appendChild(titulo)
divInfo.appendChild(descripcion)
divInfo.appendChild(tablaDetalles)

divCompra.appendChild(precio)
divCompra.appendChild(boton)

container.appendChild(divImg)
container.appendChild(divInfo)
container.appendChild(divCompra)
