if (!localStorage.getItem('loggedIn')) {
    window.location.href = 'login.html';
}
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        const productList = document.querySelector('.product-list');
        data.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}" />
                <h3>${product.title}</h3>
                <p>$${product.price}</p>
                <button onclick="viewProductDetail(${product.id})">View Details</button>
            `;
            productList.appendChild(productCard);
        });
    })
    .catch(error => console.log('Error:', error));

function viewProductDetail(productId) {
    window.location.href = `product-detail.html?id=${productId}`;
}
function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
}
