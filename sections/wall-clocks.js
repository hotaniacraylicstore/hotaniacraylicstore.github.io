
/* HOTANI ACRYLIC STORE - WALL CLOCKS */

(function () {
    const section = document.getElementById("wall-clocks-collection");
    if (!section) return;

    section.innerHTML = `
        <div class="section-container">
            <div class="section-heading">
                <span class="section-subtitle">Timeless Home Decor</span>
                <h2>Wall Clocks</h2>
                <p>Elegant clock designs for your beautiful home</p>
            </div>

            <div class="product-grid" id="wall-clock-products">
                <p class="collection-loading">Products will appear here.</p>
            </div>

            <div class="collection-view-all">
                <a href="pages/wall-clocks.html" class="view-all-button">
                    View All Products →
                </a>
            </div>
        </div>
    `;
})();
