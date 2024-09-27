var swiper = new Swiper(".mySwiper-1",{
    slidesPerview:1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickble:true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-perv"
    }
});

var swiper = new Swiper(".mySwiper-2",{
    slidesPerview:4,
    spaceBetween: 30,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation: {
        nextEl:".swiper-button-next",
        pervEl:".swiper-button-perv"
    }, 
    breakpoints : {
        0:{
            slidesPerview:1
        },
        520: {
            slidesPerview:2
        }, 
        950: {
            slidesPerview:3
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    let cart = [];

    
    const cartButtons = document.querySelectorAll('.CartBtn');
    cartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productElement = button.closest('.product');
            const product = {
                name: productElement.querySelector('h4').textContent,
                price: parseFloat(productElement.querySelector('.price').textContent.replace('$', '').replace(' MXN', '').replace(',', ''))
            };
            cart.push(product);
            updateCart();
        });
    });


    const cartItemList = document.getElementById('cart-item-list');
    cartItemList.addEventListener('click', function (e) {
        if (e.target.classList.contains('remove-btn')) {
            const itemIndex = e.target.dataset.index;
            cart.splice(itemIndex, 1);
            updateCart();
        }
    });


    function updateCart() {
        const cartItemList = document.getElementById('cart-item-list');
        cartItemList.innerHTML = '';
        let total = 0;
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)} MXN`;
            const removeButton = document.createElement('button');
            removeButton.textContent =       'Eliminar';
            removeButton.classList.add('remove-btn');
            removeButton.dataset.index = index;
            li.appendChild(removeButton);
            cartItemList.appendChild(li);
            total += item.price;
        });
        document.querySelector('.quantity').textContent = cart.length;
        document.querySelector('.btn-cart').dataset.quantity = cart.length;
        document.querySelector('.total').textContent = `Total: $${total.toFixed(2)} MXN`;
    }

    // Comprar todo
    const buyAllButton = document.querySelector('.buy-all');
    buyAllButton.addEventListener('click', function () {
        if (cart.length > 0) {
            alert('Compra realizada con éxito');
            cart = [];
            updateCart();
        } else {
            alert('El carrito está vacío');
        }
    });

    // Mostrar/Ocultar carrito
    const btnCart = document.querySelector('.btn-cart');
    const cartItems = document.getElementById('cart-items');
    const closeCart = document.getElementById('close-cart');

    btnCart.addEventListener('click', function () {
        cartItems.style.display = cartItems.style.display === 'none' ? 'block' : 'none';
    });

    closeCart.addEventListener('click', function () {
        cartItems.style.display = 'none';
    });
});
