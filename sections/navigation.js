
/* HOTANI ACRYLIC STORE - NAVIGATION */

(function () {
    const nav = document.getElementById("main-navigation");
    if (!nav) return;

    nav.innerHTML = `
        <div class="navigation-container">
            <ul class="navigation-menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="#shop-by-category">Shop by Category</a></li>
                <li><a href="#islamic-art-collection">Islamic Calligraphy</a></li>
                <li><a href="#wall-art-collection">Wall Art</a></li>
                <li><a href="#acrylic-mirrors-collection">Acrylic Mirrors</a></li>
                <li><a href="#wall-clocks-collection">Wall Clocks</a></li>
                <li><a href="#custom-design">Custom Designs</a></li>
                <li><a href="pages/contact.html">Contact</a></li>
            </ul>
        </div>
    `;
})();

