
/* ==========================================
   HOTANI ACRYLIC STORE
   PRODUCT DISPLAY SYSTEM
========================================== */

(function () {

    function formatPrice(price) {
        return "Rs. " + Number(price).toLocaleString("en-PK");
    }

    function escapeHTML(value) {
        return String(value ?? "").replace(/[&<>"']/g, function (char) {
            return {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"
            }[char];
        });
    }

    function createProductCard(product) {

        const price = Number(product.offerPrice) > 0
            ? Number(product.offerPrice)
            : Number(product.price);

        const oldPrice = Number(product.offerPrice) > 0
            ? `<span class="old-price">${formatPrice(product.price)}</span>`
            : "";

        const badge = product.badge
            ? `<span class="sale-badge">${escapeHTML(product.badge)}</span>`
            : "";

        return `
            <div class="product-card">

                ${badge}

                <img
                    src="${escapeHTML(product.image)}"
                    alt="${escapeHTML(product.name)}"
                    loading="lazy"
                >

                <div class="product-card-content">

                    <h3>${escapeHTML(product.name)}</h3>

                    <div class="product-price">
                        ${oldPrice}
                        <span class="sale-price">
                            ${formatPrice(price)}
                        </span>
                    </div>

                    <button
                        class="add-to-cart-btn"
                        data-product-id="${escapeHTML(product.id)}"
                    >
                        Add to Cart
                    </button>

                </div>

            </div>
        `;
    }

    function renderCategory(categoryId, containerId) {

        const container = document.getElementById(containerId);
        if (!container) return;

        if (typeof window.HOTANI_GET_PRODUCTS_BY_CATEGORY !== "function") {
            container.innerHTML = "<p>Products are loading...</p>";
            return;
        }

        const products =
            window.HOTANI_GET_PRODUCTS_BY_CATEGORY(categoryId);

        if (!products || products.length === 0) {
            container.innerHTML = `
                <p class="collection-loading">
                    New products coming soon.
                </p>
            `;
            return;
        }

        container.innerHTML = products
            .map(product => createProductCard(product))
            .join("");
    }

    function renderAllProducts() {

        renderCategory("islamic-calligraphy", "islamic-calligraphy-products");

        renderCategory("modern-wall-art", "modern-wall-art-products");

        renderCategory("acrylic-mirrors", "acrylic-mirror-products");

        renderCategory("wall-clocks", "wall-clock-products");

        renderCategory("custom-plates", "custom-plates-products");

        renderCategory("accessories", "accessories-products");

        renderCategory("wall-decor", "wall-decor-products");

    }

    document.addEventListener("click", function (event) {

        const button = event.target.closest(".add-to-cart-btn");
        if (!button) return;

        const productId = button.dataset.productId;

        if (typeof window.HOTANI_GET_PRODUCT !== "function") return;

        const product = window.HOTANI_GET_PRODUCT(productId);
        if (!product) return;

        const price = Number(product.offerPrice) > 0
            ? Number(product.offerPrice)
            : Number(product.price);

        if (typeof window.HOTANI_ADD_TO_CART === "function") {

            window.HOTANI_ADD_TO_CART({
                id: product.id,
                name: product.name,
                price: price,
                image: product.image,
                quantity: 1
            });

        }

    });

    window.HOTANI_RENDER_PRODUCTS = renderAllProducts;

    renderAllProducts();

})();
