
/* HOTANI ACRYLIC STORE - WALL DECOR */

(function () {

    const section = document.getElementById("wall-decor-collection");
    if (!section) return;

    section.innerHTML = `
        <div class="section-container">

            <div class="section-heading">
                <span class="section-subtitle">Beautiful Spaces</span>
                <h2>Wall Decor</h2>
                <p>Give your walls a beautiful new appearance</p>
            </div>

            <div class="product-grid" id="wall-decor-products">
                <p class="collection-loading">
                    New products coming soon.
                </p>
            </div>

        </div>
    `;

})();
