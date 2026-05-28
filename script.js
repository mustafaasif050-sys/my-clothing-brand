document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.product-card button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Item added to cart!');
            // In a real implementation, this would update a cart state or send data to a backend
        });
    });
});