"use strict";
alert("a")
(function () {
    // Global variables
    var userAgent = navigator.userAgent.toLowerCase(),
        initialDate = new Date(),

        $document = $(document),
        $window = $(window),
        $html = $("html"),
        $body = $("body"),

        isDesktop = $html.hasClass("desktop"),
        isIE = userAgent.indexOf("msie") !== -1 ? parseInt(userAgent.split("msie")[1], 10) : userAgent.indexOf("trident") !== -1 ? 11 : userAgent.indexOf("edge") !== -1 ? 12 : false,
        isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        windowReady = false,
        isNoviBuilder = false,
        loaderTimeoutId,
        cart = JSON.parse(localStorage.getItem('cart')) || [], // Carrito de compras
        plugins = {
            bootstrapTooltip: $("[data-toggle='tooltip']"),
            bootstrapTabs: $(".tabs-custom"),
            rdNavbar: $(".rd-navbar"),
            materialParallax: $(".parallax-container"),
            rdMailForm: $(".rd-mailform"),
            rdInputLabel: $(".form-label"),
            regula: $("[data-constraints]"),
            selectFilter: $("select"),
            wow: $(".wow"),
            owl: $(".owl-carousel"),
            swiper: $(".swiper-slider"),
            slick: $('.slick-slider'),
            isotope: $(".isotope"),
            radio: $("input[type='radio']"),
            checkbox: $("input[type='checkbox']"),
            preloader: $(".preloader"),
            captcha: $('.recaptcha'),
            scroller: $(".scroll-wrap"),
            lightGallery: $( '[data-lightgallery="group"]' ),
            lightGalleryItem: $( '[data-lightgallery="item"]' ),
            lightDynamicGalleryItem: $( '[data-lightgallery="dynamic"]' ),
            copyrightYear: $(".copyright-year"),
            buttonWinona: $('.button-winona'),
            multitoggle: document.querySelectorAll('[data-multitoggle]')
        };

    // Initialize scripts that require a loaded page
    $window.on('load', function () {
        // Page loader & Page transition
        if (plugins.preloader.length && !isNoviBuilder) {
            pageTransition({
                page: $('.page'),
                animDelay: 500,
                animDuration: 500,
                animIn: 'fadeIn',
                animOut: 'fadeOut',
                conditions: function (event, link) {
                    return !/(\#|callto:|tel:|mailto:|:\/\/)/.test(link) && !event.currentTarget.hasAttribute('data-lightgallery');
                },
                onReady: function () {
                    clearTimeout(loaderTimeoutId);
                    plugins.preloader.addClass('loaded');
                    windowReady = true;
                }
            });
        }

        // Isotope
        if (plugins.isotope.length) {
            for (var i = 0; i < plugins.isotope.length; i++) {
                var isotopeItem = plugins.isotope[i];
                isotopeItem.isotope.layout();

                window.addEventListener('resize', function () {
                    setTimeout(function () {
                        isotopeItem.isotope.layout();
                    }, 2000);
                });
            }
        }
    });

    // Initialize scripts that require a finished document
    $(function () {
        isNoviBuilder = window.xMode;

        // Function to update cart count
        function updateCartCount() {
            document.getElementById('cart-count').innerText = cart.length;
        }

        // Function to add product to cart
        window.addToCart = function (product) {
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
        };

        // Update cart count on page load
        updateCartCount();

        // Other existing functions...

        // Initialize other plugins and functionalities as before...
    });
}());


document.querySelector('.rd-nav-item').addEventListener('click', function(e){
    e.preventDefault();
    const contactoSection = Document.getElementById('contacto');
    contactoSection.scrollIntoView({behavior: 'smooth'});
});


//Carrito de compras//

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <span>${item.name} - $${item.price} x 
                <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
            </span>
            <button onclick="removeFromCart(${index})">Eliminar</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
        total += item.price * item.quantity;
    });

    document.getElementById('total').innerText = total.toFixed(2);
}

function addToCart(product) {
    const existingProduct = cart.find(item => item.name === product.name);
    if (existingProduct) {
		
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('TU_CLAVE_SECRETA');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/pagar', async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: 'cop',
            payment_method_types: ['card'],
        });
        res.json({ paymentIntent });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));