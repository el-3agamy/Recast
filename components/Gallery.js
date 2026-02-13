// export class Gallery{
//      renderGallery() {
//         const p = this.state.product;
//         const galleryContainer = document.querySelector('.gallery-section');

//         galleryContainer.innerHTML = `
//             <div class="product-gallery">
//                 <img src="${p.images.main}" class="main-feature-img" alt="Main View">
//                 <div class="sub-gallery">
//                     ${p.images.gallery.map(img => `<img src="${img}" alt="Gallery View">`).join('')}
//                 </div>
//             </div>
//         `;
//     }
// }

export class Gallery {
    // We pass the images into the method so the Gallery knows what to show
    renderGallery(images) {
        const galleryContainer = document.querySelector('.gallery-section');
        // if (!galleryContainer || !images) return;

        galleryContainer.innerHTML = `
            <div class="product-gallery">
                <img src="${images.main}" class="main-feature-img" alt="Main View">
                <div class="sub-gallery">
                    ${images.gallery.map(img => `<img src="${img}" alt="Gallery View">`).join('')}
                </div>
            </div>
        `;
    }
}