
// Define btn Hamburger
const btnHamburger      = document.querySelector('#btn-hamburger')
const btnCloseHamburger = document.querySelector('.close-hamburger')

btnHamburger.addEventListener('click', (e) => {
    const menuHiddent = document.querySelector('header nav.nav-header.is-desktop')
    menuHiddent.classList.add('menu-hamburger')
})

btnCloseHamburger.addEventListener('click', (e) => {
    const menuHiddent = document.querySelector('header nav.nav-header.is-desktop')
    menuHiddent.classList.remove('menu-hamburger')
})

// Productos
const productos = [
    {
        nombre: 'Vestido de Fiesta Verde con Abertura',
        precio: 98000,
        imagen: 'imagenes/1.jpg'
    },
    {
        nombre: 'Camisa Casual Azul',
        precio: 75000,
        imagen: 'imagenes/2.jpg'
    },
    {
        nombre: 'Camisa Casual Azul',
        precio: 75000,
        imagen: 'imagenes/3.jpg'
    },
    {
        nombre: 'Camisa Casual Azul',
        precio: 75000,
        imagen: 'imagenes/4.jpg'
    },
    {
        nombre: 'Camisa Casual Azul',
        precio: 75000,
        imagen: 'imagenes/5.jpg'
    },
    {
        nombre: 'Camisa Casual Azul',
        precio: 75000,
        imagen: 'imagenes/6.jpg'
    },
    {
        nombre: 'Camisa Casual Azul',
        precio: 75000,
        imagen: 'imagenes/7.jpg'
    },
];

// Función para formatear el precio en pesos colombianos
function formatearPrecio(precio) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP'
    }).format(precio);
}

// Función para añadir productos al contenedor
function cargarProductos() {
    const contenedor = document.querySelector('.popular-products__container');

    productos.forEach(producto => {
        const articulo = document.createElement('article');
        articulo.classList.add('product-card');

        const figura = document.createElement('figure');
        figura.classList.add('product-card__image');

        const img = document.createElement('img');
        img.src = producto.imagen;
        img.alt = producto.nombre;

        const nombre = document.createElement('h6');
        nombre.classList.add('product-card__name');
        nombre.textContent = producto.nombre;

        const precio = document.createElement('div');
        precio.classList.add('product-card__price');
        precio.textContent = formatearPrecio(producto.precio);

        const acciones = document.createElement('div');
        acciones.classList.add('product-card__actions');

        const addToCartDiv = document.createElement('div');
        addToCartDiv.classList.add('product-card__add-to-cart');
        const addToCartLink = document.createElement('a');
        addToCartLink.href = '#';
        addToCartLink.textContent = 'AÑADIR A LA CESTA';
        addToCartLink.onclick = () => addToCart(producto);
        addToCartDiv.appendChild(addToCartLink);

        const viewDiv = document.createElement('div');
        viewDiv.classList.add('product-card__view');
        const viewLink = document.createElement('a');
        viewLink.href = '#';
        viewLink.textContent = 'VER PRODUCTO';
        viewDiv.appendChild(viewLink);

        // Estructurar elementos
        figura.appendChild(img);
        acciones.appendChild(addToCartDiv);
        acciones.appendChild(viewDiv);

        articulo.appendChild(figura);
        articulo.appendChild(nombre);
        articulo.appendChild(precio);
        articulo.appendChild(acciones);

        contenedor.appendChild(articulo);
    });
}

// Función simulada para añadir al carrito
function addToCart(producto) {
    alert(`Producto añadido: ${producto.nombre} - ${formatearPrecio(producto.precio)}`);
}

document.addEventListener('DOMContentLoaded', cargarProductos);
