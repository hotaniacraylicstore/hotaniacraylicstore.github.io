
/* ==========================================
   HOTANI ACRYLIC STORE
   PRODUCT DISPLAY SYSTEM
========================================== */

(function () {

    function formatPrice(price) {
        return "Rs. " + Number(price).toLocaleString("en-PK");
    }

    function createProductCard(product) {

        const price = Number(product.offerPrice) > 0
            ? Number(product.offerPrice)
            : Number(product.price);

        const oldPrice = Number(product.offerPrice) > 0
            ? `<span class="old-price">${formatPrice(product.price)}</span>`
            : "";

        const badge = product.badge
            ? `<span class="sale-badge">${product.badge}</span>`
            : "";

        return `
            <div class="product-card">

                ${badge}

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <div class="product-card-content">

                    <h3>${product.name}</h3>

                    <div class="product-price">
                        ${oldPrice}
                        <span class="sale-price">
                            ${formatPrice(price)}
                        </span>
                    </div>

                    <button
                        class="add-to-cart-btn"
                        data-product-id="${product.id}"
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

        if (!window.HOTANI_GET_PRODUCTS) {
            container.innerHTML = "<p>Products are loading...</p>";
            return;
        }

        const products = window.HOTANI_GET_PRODUCTS_BY_CATEGORY(categoryId);

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

        renderCategory(
            "islamic-calligraphy",
            "islamic-calligraphy-products"
        );

        renderCategory(
            "modern-wall-art",
            "modern-wall-art-products"
        );

        renderCategory(
            "acrylic-mirrors",
            "acrylic-mirror-products"
        );

        renderCategory(
            "wall-clocks",
            "wall-clock-products"
        );

    }


    document.addEventListener("click", function (event) {

        const button = event.target.closest(".add-to-cart-btn");

        if (!button) return;

        const productId = button.dataset.productId;

        const product = window.HOTANI_GET_PRODUCT(productId);

        if (!product) return;

        const price = Number(product.offerPrice) > 0
            ? Number(product.offerPrice)
            : Number(product.price);

        window.HOTANI_ADD_TO_CART({
            id: product.id,
            name: product.name,
            price: price,
            image: product.image,
            quantity: 1
        });

    });


    window.HOTANI_RENDER_PRODUCTS = renderAllProducts;

    renderAllProducts();

})();
