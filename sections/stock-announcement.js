
/* HOTANI ACRYLIC STORE - SPECIAL OFFER */

(function () {
    const section = document.getElementById("stock-announcement");
    if (!section) return;

    section.innerHTML = `
        <div class="stock-announcement-content">
            <span class="stock-label">SPECIAL OFFER</span>
            <h2>Make Your Home Beautiful</h2>
            <p>Discover exclusive designs and decorate your space with style.</p>
            <a href="#shop-by-category" class="stock-button">
                Explore Collections →
            </a>
        </div>
    `;
})();
