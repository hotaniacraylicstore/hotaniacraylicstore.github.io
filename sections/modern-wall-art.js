
/* HOTANI ACRYLIC STORE - MODERN WALL ART */

(function () {
    const section = document.getElementById("wall-art-collection");
    if (!section) return;

    section.innerHTML = `
        <div class="section-container">
            <div class="section-heading">
                <span class="section-subtitle">Explore Our Designs</span>
                <h2>Modern Wall Art</h2>
                <p>Give your walls a fresh and elegant look</p>
            </div>

            <div class="product-grid" id="modern-wall-art-products">
                <p class="collection-loading">Products will appear here.</p>
            </div>

            <div class="collection-view-all">
                <a href="pages/modern-wall-art.html" class="view-all-button">
                    View All Products →
                </a>
            </div>
        </div>
    `;
})();
