
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(response => response.json())
    .then(product => {
        const productDetailDiv = document.querySelector('.product-detail');
        productDetailDiv.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" />
            </div>
            <div class="product-info">
                <h2>${product.title}</h2>
                <p class="price">$${product.price}</p>
                <p class="description">${product.description}</p>
                
                <!-- Product Specifications -->
                <div class="specifications">
                    <h3>Product Specifications:</h3>
                    <ul>
                        <li><strong>Category:</strong> ${product.category}</li>
                        <li><strong>Rating:</strong> ${product.rating.rate} stars (${product.rating.count} reviews)</li>
                    </ul>
                </div>

                <!-- Quantity and Add to Cart -->
                <div class="add-to-cart">
                    <label for="quantity">Quantity:</label>
                    <input type="number" id="quantity" value="1" min="1" max="10" />
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
                
                <!-- Reviews -->
                <div class="reviews">
                    <h3>Customer Reviews:</h3>
                    <ul>
                        <li><strong>John:</strong> "Great product, very happy!"</li>
                        <li><strong>Sarah:</strong> "Amazing quality, definitely worth the price."</li>
                    </ul>
                </div>
            </div>
        `;
    })
    .catch(error => console.log('Error:', error));
function addToCart(productId) {
    let quantity = document.getElementById('quantity').value;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.id === productId);

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += parseInt(quantity);
    } else {
        cart.push({ id: productId, quantity: parseInt(quantity) });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`Product ${productId} added to the cart with quantity ${quantity}!`);
}
