export class ProductDetails{
    renderMainProduct(details) {
        const detailsContainer = document.querySelector('.details-section');

        const statsHTML = details.stats.map(stat => `
            <div class="stat-item">
                <span class="label">${stat.label}</span>
                <span class="value">${stat.value}</span>
                <p class="desc">${stat.desc}</p>
            </div>
        `).join('');

        detailsContainer.innerHTML = `
            <div class="product-header">
                <h1>${details.name}</h1>
                <p class="price">$${details.price.toLocaleString()}</p>
            </div>
            <p class="description">${details.description}</p>

            <div class="spec-section">
                <span>Piece Specifications</span>
                <p>${details.specifications}</p>
            </div>

            <div class="product-stats-grid">${statsHTML}</div>

            <div class="size-selector">
                <span>Size</span>
                <div class="size-grid">
                    ${details.sizes.map(size => `<button class="size-btn">${size}</button>`).join('')}
                </div>
            </div>

            <div class="actions">
                <button class="btn-add-cart">Add To Cart</button>
                <button class="btn-wishlist">♡</button>
            </div>
        `;
    }
}