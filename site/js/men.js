
function transformarProducto(item) {
    return {
      nombre: item.title,
      precio: item.price,
      imagen: item.image
    };
}
  
let productos = [];

fetch("https://fakestoreapi.com/products/category/men's clothing?limit=10")
    .then(res => res.json())
    .then(data => {
        productos = data.map(transformarProducto);
        localStorage.setItem('productos', JSON.stringify(productos));
        cargarProductos();
    })
.catch(error => {
    console.error("Error al obtener los productos:", error);
});

function formatearPrecio(precio) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP'
    }).format(precio);
}

function cargarProductos() {
    const contenedor = document.querySelector('.popular-products__container');

    contenedor.innerHTML = '';

    productos.forEach(producto => {
        const articulo = document.createElement('article');
        articulo.classList.add('product-card');

        const figura = document.createElement('figure');
        figura.classList.add('product-card__image');
        const img = document.createElement('img');
        img.src = producto.imagen;
        img.alt = producto.nombre;
        figura.appendChild(img);

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

        acciones.appendChild(addToCartDiv);
        articulo.appendChild(figura);
        articulo.appendChild(nombre);
        articulo.appendChild(precio);
        articulo.appendChild(acciones);

        contenedor.appendChild(articulo);
});
}

function addToCart(producto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`Producto añadido: ${producto.nombre} - ${formatearPrecio(producto.precio)}`);
}