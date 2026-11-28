
/* HOTANI ACRYLIC STORE - SHOP BY CATEGORY */

(function () {
    const section = document.getElementById("shop-by-category");
    if (!section) return;

    const categories = [
        { id: "islamic-calligraphy", name: "Islamic Calligraphy", link: "pages/islamic-calligraphy.html" },
        { id: "modern-wall-art", name: "Modern Wall Art", link: "pages/modern-wall-art.html" },
        { id: "acrylic-mirrors", name: "Acrylic Mirrors", link: "pages/acrylic-mirrors.html" },
        { id: "wall-clocks", name: "Wall Clocks", link: "pages/wall-clocks.html" },
        { id: "custom-plates", name: "Custom Name & Number Plates", link: "pages/custom-plates.html" },
        { id: "accessories", name: "Acrylic Accessories", link: "pages/collections.html?category=accessories" },
        { id: "wall-decor", name: "Wall Decor", link: "pages/collections.html?category=wall-decor" }
    ];

    function renderCategories() {
        const products = window.HOTANI_GET_PRODUCTS
            ? window.HOTANI_GET_PRODUCTS()
            : [];

        section.innerHTML = `
            <div class="section-container">
                <div class="section-heading">
                    <h2>Shop by Category</h2>
                    <p>Explore our exclusive wall decor collections</p>
                </div>

                <div class="category-grid">
                    ${categories.map(category => {
                        const product = products.find(
                            item => item.category === category.id && item.image
                        );

                        const image = product
                            ? product.image
                            : "";

                        return `
                            <a href="${category.link}" class="category-card">
                                ${
                                    image
                                    ? `<img src="${image}" alt="${category.name}" loading="lazy">`
                                    : `<div class="category-no-image">Products Coming Soon</div>`
                                }
                                <div class="category-info">
                                    <h3>${category.name}</h3>
                                    <span>Shop Now →</span>
                                </div>
                            </a>
                        `;
                    }).join("")}
                </div>
            </div>
        `;
    }

    window.HOTANI_REFRESH_CATEGORIES = renderCategories;

    renderCategories();
})();
