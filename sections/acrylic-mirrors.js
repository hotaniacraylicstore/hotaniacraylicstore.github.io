
/* HOTANI ACRYLIC STORE - ACRYLIC MIRRORS */

(function () {
    const section = document.getElementById("acrylic-mirrors-collection");
    if (!section) return;

    section.innerHTML = `
        <div class="section-container">
            <div class="section-heading">
                <span class="section-subtitle">Elegant Home Decor</span>
                <h2>Acrylic Mirrors</h2>
                <p>Stylish mirror designs for beautiful spaces</p>
            </div>

            <div class="product-grid" id="acrylic-mirror-products">
                <p class="collection-loading">Products will appear here.</p>
            </div>

            <div class="collection-view-all">
                <a href="pages/acrylic-mirrors.html" class="view-all-button">
                    View All Products →
                </a>
            </div>
        </div>
    `;
})();
