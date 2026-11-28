
/* ==========================================
   HOTANI ACRYLIC STORE
   MAIN WEBSITE LOADER
========================================== */

(function () {

    const scripts = [

        // PRODUCT DATA
        "data/products.js",

        // ISLAMIC CALLIGRAPHY PRODUCTS
        "products/islamic-calligraphy/gold-acrylic-bismillah/product.js",
        "products/islamic-calligraphy/round-ayatul-kursi/product.js",
        "products/islamic-calligraphy/mashaallah-gold-acrylic/product.js",
        "products/islamic-calligraphy/mashaallah-la-quwwata/product.js",

        // WALL CLOCK PRODUCTS
        "products/wall-clocks/luxury-gold-black-roman-numeral/product.js",

        // PRODUCT DISPLAY
        "products/render-products.js",

        // WEBSITE SECTIONS
        "sections/announcement.js",
        "sections/header.js",
        "sections/navigation.js",
        "sections/hero-slider.js",
        "sections/benefits.js",
        "sections/categories.js",
        "sections/islamic-calligraphy.js",
        "sections/modern-wall-art.js",
        "sections/acrylic-mirrors.js",
        "sections/wall-clocks.js",
        "sections/custom-plates.js",
        "sections/accessories.js",
        "sections/wall-decor.js",
        "sections/stock-announcement.js",
        "sections/reviews.js",
        "sections/why-choose-us.js",
        "sections/video-showcase.js",
        "sections/newsletter.js",
        "sections/footer.js",
        "sections/cart.js"

    ];

    function loadScript(index) {

        if (index >= scripts.length) {

            if (window.HOTANI_RENDER_PRODUCTS) {
                window.HOTANI_RENDER_PRODUCTS();
            }

            if (window.HOTANI_REFRESH_CATEGORIES) {
                window.HOTANI_REFRESH_CATEGORIES();
            }

            console.log("HOTANI STORE: All sections loaded.");
            return;
        }

        const script = document.createElement("script");

        script.src = scripts[index];
        script.onload = function () {
            loadScript(index + 1);
        };

        script.onerror = function () {
            console.error("Script not loaded: " + scripts[index]);
        };

        document.body.appendChild(script);
    }

    loadScript(0);

})();
