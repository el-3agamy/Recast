export class ProductHero {
    constructor(productData, onAddToCart) {
        this.data = productData;
        this.onAddToCart = onAddToCart;
    }

    render() {
        const section = document.createElement('section');
        section.className = 'product-hero';
        section.innerHTML = `
            <h1>${this.data.name}</h1>
            <button id="add-btn">Add To Cart</button>
        `;

        // Attach event listener directly to this component's button
        section.querySelector('#add-btn').onclick = this.onAddToCart;
        
        return section;
    }
}