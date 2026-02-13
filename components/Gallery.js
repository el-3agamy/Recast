

export class Gallery {
    renderGallery(images) {
        const galleryContainer = document.querySelector('.gallery-section');

        galleryContainer.innerHTML = `
            <div class="product-gallery">
                <div class="main-image-container">
                    <img src="${images.main}" class="main-feature-img" alt="Main View">
                </div>
                <div class="sub-gallery-container">
                    <!-- Top Sub Image -->
                    <div class="sub-gallery-top">
                        <img src="${images.gallery[0]}" alt="Gallery Top">
                    </div>
                    <!-- Bottom Row Sub Images -->
                    <div class="sub-gallery-bottom-row">
                        ${images.gallery.slice(1).map(img => `
                            <div class="sub-gallery-item">
                                <img src="${img}" alt="Gallery View">
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
}