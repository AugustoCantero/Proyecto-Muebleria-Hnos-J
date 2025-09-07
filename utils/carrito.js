if (!localStorage.getItem("contador-carrito")) {
  localStorage.setItem("contador-carrito", 0);
}

const numeroCarrito = document.getElementById('num-carrito')
numeroCarrito.textContent = localStorage.getItem('contador-carrito')
