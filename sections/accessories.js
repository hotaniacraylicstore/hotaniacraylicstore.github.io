
/* HOTANI ACRYLIC STORE - ACCESSORIES */

(function () {

    const section = document.getElementById("accessories-collection");
    if (!section) return;

    section.innerHTML = `
        <div class="section-container">

            <div class="section-heading">
                <span class="section-subtitle">Explore More</span>
                <h2>Acrylic Accessories</h2>
                <p>Discover stylish acrylic accessories</p>
            </div>

            <div class="product-grid" id="accessories-products">
                <p class="collection-loading">
                    New products coming soon.
                </p>
            </div>

        </div>
    `;

})();
