document.addEventListener('DOMContentLoaded', cargarCarrito);

function cargarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contenedor = document.getElementById('cart-items');
    const total = document.getElementById('total');

    contenedor.innerHTML = '';

    if (carrito.length === 0) {
        contenedor.innerHTML = '<p>Tu carrito está vacío</p>';
        total.textContent = '0.00';
        return;
    }

    let totalPrecio = 0;

    carrito.forEach(producto => {
        const item = document.createElement('div');
        item.classList.add('cart-item');

        item.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" width="80">
            <h4>${producto.nombre}</h4>
            <p>${formatearPrecio(producto.precio)}</p>
        `;

        contenedor.appendChild(item);
        totalPrecio += producto.precio;
    });

    total.textContent = totalPrecio.toFixed(2);
}

function formatearPrecio(precio) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP'
    }).format(precio);
}
