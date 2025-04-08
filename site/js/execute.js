
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

function transformarProducto(item) {
    return {
      nombre: item.title,
      precio: item.price,
      imagen: item.image
    };
}

function transformarProducto(item) {
    return {
        nombre: item.title,
        precio: item.price,
        imagen: item.image
    };
}

let productos = [];

Promise.all([
    fetch("https://fakestoreapi.com/products/category/women's clothing?limit=10")
        .then(res => res.json()),
    fetch("https://fakestoreapi.com/products/category/men's clothing?limit=10")
        .then(res => res.json())
])
.then(([mujeresData, hombresData]) => {
    const productosMujeres = mujeresData.map(transformarProducto);
    const productosHombres = hombresData.map(transformarProducto);

    productos = productosMujeres.concat(productosHombres);
    cargarProductos();
})
.catch(error => {
    console.error("Error al obtener los productos:", error);
});

// Función para formatear el precio en pesos colombianos
function formatearPrecio(precio) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP'
    }).format(precio);
}

// Actualizar Productos
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

function addToCart(producto) {
    alert(`Producto añadido: ${producto.nombre} - ${formatearPrecio(producto.precio)}`);
}