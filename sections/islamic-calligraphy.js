
/* HOTANI ACRYLIC STORE - ISLAMIC CALLIGRAPHY COLLECTION */

(function () {
    const section = document.getElementById("islamic-art-collection");
    if (!section) return;

    section.innerHTML = `
        <div class="section-container">
            <div class="section-heading">
                <span class="section-subtitle">Our Collection</span>
                <h2>Islamic Calligraphy</h2>
                <p>Beautiful Islamic art to bring elegance to your home</p>
            </div>

            <div class="product-grid" id="islamic-calligraphy-products">
                <p class="collection-loading">Products will appear here.</p>
            </div>

            <div class="collection-view-all">
                <a href="pages/islamic-calligraphy.html" class="view-all-button">
                    View All Products →
                </a>
            </div>
        </div>
    `;
})();
