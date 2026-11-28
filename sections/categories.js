
/* HOTANI ACRYLIC STORE - SHOP BY CATEGORY */

(function () {
    const section = document.getElementById("shop-by-category");
    if (!section) return;

    const categories = [
        {
            name: "Islamic Calligraphy",
            image: "images/banners/banner-2.jpg",
            link: "#islamic-art-collection"
        },
        {
            name: "Modern Wall Art",
            image: "images/banners/banner-3.jpg",
            link: "#wall-art-collection"
        },
        {
            name: "Acrylic Mirrors",
            image: "images/banners/hotani-acrylic-hero-banner.jpg",
            link: "#acrylic-mirrors-collection"
        },
        {
            name: "Wall Clocks",
            image: "images/banners/banner-2.jpg",
            link: "#wall-clocks-collection"
        },
        {
            name: "Custom Name & Number Plates",
            image: "images/banners/custom-design.jpg",
            link: "#custom-design"
        },
        {
            name: "Acrylic Accessories",
            image: "images/banners/banner-3.jpg",
            link: "#accessories-collection"
        },
        {
            name: "Wall Decor",
            image: "images/banners/hotani-acrylic-hero-banner.jpg",
            link: "#wall-decor-collection"
        }
    ];

    section.innerHTML = `
        <div class="section-container">
            <div class="section-heading">
                <h2>Shop by Category</h2>
                <p>Explore our exclusive wall decor collections</p>
            </div>

            <div class="category-grid">
                ${categories.map(category => `
                    <a href="${category.link}" class="category-card">
                        <img
                            src="${category.image}"
                            alt="${category.name}"
                            loading="lazy"
                        >
                        <div class="category-info">
                            <h3>${category.name}</h3>
                            <span>Shop Now →</span>
                        </div>
                    </a>
                `).join("")}
            </div>
        </div>
    `;
})();
