document.addEventListener('DOMContentLoaded', () => {
    const featuredProducts = document.getElementById('featured-products');
    
    function createProductGrid() {
        const productGrid = document.createElement('div');
        productGrid.className = 'product-grid';
        
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            productCard.innerHTML = `
                <div class="product-image"></div>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">€${product.price.toFixed(2)}</p>
                <p>Origin: ${product.origin}</p>
                <button class="btn" onclick="addToCart('${product.id}')">Add to Cart</button>
            `;
            
            productGrid.appendChild(productCard);
        });
        
        featuredProducts.appendChild(productGrid);
    }
    
    createProductGrid();
});

function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
    // Implement cart functionality here
}
