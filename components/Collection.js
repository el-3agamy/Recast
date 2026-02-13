export class Collection {
    renderCollection(collectionData) {
        const container = document.querySelector('.ring-collection-inner');
        if (!container || !collectionData) return;

        // Note: Use the property name from your JSON (collectionProducts)
        container.innerHTML = collectionData.collectionProducts.map(item => `
            <div class="collection-item">
                <div class="img-wrapper">
                    <img src="${item.img}" alt="${item.name}">
                </div>
                <p class="item-name">${item.name}</p>
                <span class="item-price">$${item.price.toLocaleString()}</span>
            </div>
        `).join('');
    }
}