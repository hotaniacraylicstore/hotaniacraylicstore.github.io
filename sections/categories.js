
/* HOTANI ACRYLIC STORE - SHOP BY CATEGORY */

(function () {
    const section = document.getElementById("shop-by-category");
    if (!section) return;

    const categories = [
        {
            name: "Islamic Calligraphy",
            image: "images/categories/islamic-calligraphy.jpg",
            link: "#islamic-art-collection"
        },
        {
            name: "Modern Wall Art",
            image: "images/categories/modern-wall-art.jpg",
            link: "#wall-art-collection"
        },
        {
            name: "Acrylic Mirrors",
            image: "images/categories/acrylic-mirrors.jpg",
            link: "#acrylic-mirrors-collection"
        },
        {
            name: "Wall Clocks",
            image: "images/categories/wall-clocks.jpg",
            link: "#wall-clocks-collection"
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
                        <img src="${category.image}" alt="${category.name}" loading="lazy">
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
