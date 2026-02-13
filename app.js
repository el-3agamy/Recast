
import { Gallery } from './components/Gallery.js';
import { ProductDetails } from './components/ProductDetails.js';
import { Collection } from './components/Collection.js';

const gallery = new Gallery();
const detailsOfProducts = new ProductDetails();
const ringCollection = new Collection(); 

export class ProductPage {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.state = {
            product: null,
            collection: null,
            selectedSize: null,
            cartCount: 0
        };
    }

    async init() {
        const data = await this.fetchData();
        if (data) {
            this.state.product = data.mainProduct;
            this.state.collection = data.collection;
            this.render();
            this.initEventListeners();
        }
    }

    async fetchData() {
        try {
            const response = await fetch('./data.json');
            return await response.json();
        } catch (error) {
            console.error("Error: ", error);
            return null;
        }
    }

    render() {
        if (!this.container) return;

        // 1. Create the skeleton
        this.container.innerHTML = `
            <div class="product-page-layout">
                <section class="gallery-section"></section>
                <section class="details-section"></section>
            </div>
            <section class="collection-section">
                <h2 class="collection-title">${this.state.collection?.collectionName || ''}</h2>
                <div class="ring-collection-inner"></div>
                <button class="shop-all-btn">Shop Rings</button>
            </section>
        `;

        // 2. Tell the other classes to fill in the sections
        gallery.renderGallery(this.state.product.images);
        detailsOfProducts.renderMainProduct(this.state.product);
        ringCollection.renderCollection(this.state.collection);
    }

    initEventListeners() {
        // Size Selection
        const sizeGrid = document.querySelector('.size-grid');
        if (sizeGrid) {
            sizeGrid.addEventListener('click', (e) => {
                if (e.target.classList.contains('size-btn')) {
                    document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
                    e.target.classList.add('active');
                    this.state.selectedSize = e.target.innerText;
                }
            });
        }

        // Add to Cart
        const addBtn = document.querySelector('.btn-add-cart');
        if (addBtn) {
            addBtn.addEventListener('click', () => {
                if (!this.state.selectedSize) {
                    alert("Please select a size first.");
                    return;
                }
                this.state.cartCount++;
                this.updateCartUI();
            });
        }
    }

    updateCartUI() {
        const cartCountEl = document.querySelector('.cart-count-value');
        if (cartCountEl) {
            cartCountEl.innerText = this.state.cartCount;
        }
    }
}