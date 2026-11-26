
/* HOTANI ACRYLIC STORE - HEADER */

(function () {
    const header = document.getElementById("site-header");
    if (!header) return;

    header.innerHTML = `
        <div class="header-container">

            <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Open menu">
                ☰
            </button>

            <a href="index.html" class="store-logo">
                <img src="images/logo/Logo.jpg" alt="HOTANI ACRYLIC">
            </a>

            <div class="header-search">
                <input type="search" id="store-search" placeholder="Search products...">
                <button id="search-button" aria-label="Search">⌕</button>
            </div>

            <div class="header-actions">
                <a href="pages/contact.html" class="header-account">
                    <span>♙</span>
                    <small>Contact</small>
                </a>

                <button class="header-cart" id="open-cart" aria-label="Shopping cart">
                    <span>🛒</span>
                    <small>Cart</small>
                    <b id="cart-count">0</b>
                </button>
            </div>

        </div>
    `;
})();
