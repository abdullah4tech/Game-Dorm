// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Fetch the JSON data
    fetch('Games-data.json')
        .then(response => response.json())
        .then(data => {
            // Get the container where products will be added
            const productContainer = document.getElementById('productContainer');

            // Iterate through each product and create HTML elements
            data.products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');

                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>Price: $${product.price.toFixed(2)}</p>
                `;

                // Append the product element to the container
                productContainer.appendChild(productElement);
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});
