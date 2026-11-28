
/* ==========================================
   HOTANI ACRYLIC STORE
   COMPLETE SHOPPING CART SYSTEM
========================================== */

(function () {

    const WHATSAPP_NUMBER = "923336461771";
    const CART_KEY = "hotani_cart";

    const isPagesFolder = window.location.pathname.includes("/pages/");
    const rootPath = isPagesFolder ? "../" : "";

    function formatPrice(price) {
        return "Rs. " + Number(price || 0).toLocaleString("en-PK");
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

    function getCart() {
        try {
            const cart = JSON.parse(localStorage.getItem(CART_KEY));
            return Array.isArray(cart) ? cart : [];
        } catch (error) {
            return [];
        }
    }

    function saveCart(cart) {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
        renderCart();
    }

    function getImagePath(image) {
        if (!image) return "";

        if (
            image.startsWith("http://") ||
            image.startsWith("https://") ||
            image.startsWith("/")
        ) {
            return image;
        }

        return rootPath + image;
    }

    /* CART DRAWER HTML */

    const drawer = document.getElementById("cart-drawer");

    if (drawer) {
        drawer.innerHTML = `
            <div class="cart-overlay" id="cart-overlay"></div>

            <div class="cart-panel">

                <div class="cart-header">
                    <h2>Your Shopping Cart</h2>
                    <button id="cart-close-button" aria-label="Close cart">
                        &times;
                    </button>
                </div>

                <div id="cart-items" class="cart-items"></div>

                <div class="cart-footer">

                    <div class="cart-total-row">
                        <strong>Subtotal:</strong>
                        <strong id="cart-total">Rs. 0</strong>
                    </div>

                    <button id="checkout-button" class="checkout-button">
                        Order on WhatsApp
                    </button>

                </div>

            </div>
        `;
    }

    /* FLOATING WHATSAPP BUTTON */

    if (!document.querySelector(".whatsapp-float")) {
        document.body.insertAdjacentHTML("beforeend", `
            <a
                href="https://wa.me/${WHATSAPP_NUMBER}"
                class="whatsapp-float"
                target="_blank"
                rel="noopener"
                aria-label="Contact HOTANI on WhatsApp"
            >
                <svg viewBox="0 0 32 32" width="32" height="32"
                     fill="currentColor" aria-hidden="true">
                    <path d="M16 .5A15.4 15.4 0 0 0 2.7 23.7L.5 31.5l8-2.1A15.5 15.5 0 1 0 16 .5Zm0 28.2a12.7 12.7 0 0 1-6.5-1.8l-.5-.3-4.8 1.3 1.3-4.7-.3-.5A12.7 12.7 0 1 1 16 28.7Zm7-9.5c-.4-.2-2.3-1.1-2.7-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.5-.2.3-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.6.1-.3 0-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.3-1.4 3.2s1.4 3.7 1.6 4c.2.3 2.8 4.3 6.8 6 .9.4 1.6.6 2.1.7.9.3 1.8.2 2.4.1.8-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5Z"/>
                </svg>
            </a>
        `);
    }

    /* UPDATE CART COUNT */

    function updateCartCount() {
        const countElement = document.getElementById("cart-count");

        if (!countElement) return;

        const count = getCart().reduce(function (total, item) {
            return total + Number(item.quantity || 1);
        }, 0);

        countElement.textContent = count;
    }

    /* RENDER CART ITEMS */

    function renderCart() {

        const itemsContainer = document.getElementById("cart-items");
        const totalElement = document.getElementById("cart-total");

        const cart = getCart();

        if (itemsContainer) {

            if (cart.length === 0) {

                itemsContainer.innerHTML = `
                    <div class="cart-empty">
                        <p>Your cart is empty.</p>
                        <p>Start adding your favourite products!</p>
                    </div>
                `;

            } else {

                itemsContainer.innerHTML = cart.map(function (item) {

                    const itemId = escapeHTML(item.id);
                    const image = escapeHTML(getImagePath(item.image));
                    const name = escapeHTML(item.name);
                    const price = Number(item.price || 0);
                    const quantity = Number(item.quantity || 1);

                    return `
                        <div class="cart-item">

                            <img
                                src="${image}"
                                alt="${name}"
                                class="cart-item-image"
                            >

                            <div class="cart-item-details">

                                <h3>${name}</h3>

                                <p class="cart-item-price">
                                    ${formatPrice(price)}
                                </p>

                                <div class="cart-item-actions">

                                    <div class="cart-quantity">

                                        <button
                                            data-cart-action="decrease"
                                            data-cart-id="${itemId}"
                                        >−</button>

                                        <span>${quantity}</span>

                                        <button
                                            data-cart-action="increase"
                                            data-cart-id="${itemId}"
                                        >+</button>

                                    </div>

                                    <button
                                        class="remove-cart-item"
                                        data-cart-action="remove"
                                        data-cart-id="${itemId}"
                                    >
                                        Remove
                                    </button>

                                </div>

                            </div>

                        </div>
                    `;

                }).join("");

            }
        }

        const subtotal = cart.reduce(function (total, item) {
            return total +
                (Number(item.price || 0) * Number(item.quantity || 1));
        }, 0);

        if (totalElement) {
            totalElement.textContent = formatPrice(subtotal);
        }

        updateCartCount();
    }

    /* ADD PRODUCT TO CART */

    window.HOTANI_ADD_TO_CART = function (item) {

        if (!item || !item.name) return;

        const cart = getCart();

        const itemId = String(item.id || item.productId || "");

        if (!itemId) return;

        const existingItem = cart.find(function (product) {
            return String(product.id) === itemId;
        });

        if (existingItem) {

            existingItem.quantity =
                Number(existingItem.quantity || 1) +
                Number(item.quantity || 1);

        } else {

            cart.push({
                id: itemId,
                productId: item.productId || item.id,
                name: item.name,
                price: Number(item.price || 0),
                image: item.image || "",
                quantity: Number(item.quantity || 1),
                customSize: item.customSize || ""
            });

        }

        saveCart(cart);
        openCart();
    };

    /* OPEN AND CLOSE CART */

    function openCart() {
        if (drawer) {
            drawer.classList.add("cart-open");
        }
    }

    function closeCart() {
        if (drawer) {
            drawer.classList.remove("cart-open");
        }
    }

    document.addEventListener("click", function (event) {

        if (event.target.closest("#open-cart")) {
            openCart();
        }

        if (
            event.target.closest("#cart-close-button") ||
            event.target.closest("#cart-overlay")
        ) {
            closeCart();
        }

    });

    /* QUANTITY AND REMOVE BUTTONS */

    document.addEventListener("click", function (event) {

        const button = event.target.closest("[data-cart-action]");
        if (!button) return;

        const action = button.dataset.cartAction;
        const itemId = button.dataset.cartId;

        const cart = getCart();

        const index = cart.findIndex(function (item) {
            return String(item.id) === itemId;
        });

        if (index === -1) return;

        if (action === "increase") {
            cart[index].quantity =
                Number(cart[index].quantity || 1) + 1;
        }

        if (action === "decrease") {
            cart[index].quantity =
                Number(cart[index].quantity || 1) - 1;

            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }
        }

        if (action === "remove") {
            cart.splice(index, 1);
        }

        saveCart(cart);

    });

    /* WHATSAPP CHECKOUT */

    document.addEventListener("click", function (event) {

        const checkoutButton = event.target.closest("#checkout-button");
        if (!checkoutButton) return;

        const cart = getCart();

        if (cart.length === 0) {
            alert("Your shopping cart is empty.");
            return;
        }

        let message = "Assalam-o-Alaikum HOTANI ACRYLIC STORE!\n\n";
        message += "I want to place this order:\n\n";

        let subtotal = 0;

        cart.forEach(function (item, index) {

            const price = Number(item.price || 0);
            const quantity = Number(item.quantity || 1);
            const total = price * quantity;

            subtotal += total;

            message += (index + 1) + ". " + item.name + "\n";
            message += "Quantity: " + quantity + "\n";
            message += "Price: " + formatPrice(price) + "\n";
            message += "Total: " + formatPrice(total) + "\n\n";

        });

        message += "Subtotal: " + formatPrice(subtotal);
        message += "\n\nPlease confirm my order. Thank you!";

        const whatsappURL =
            "https://wa.me/" + WHATSAPP_NUMBER +
            "?text=" + encodeURIComponent(message);

        window.open(whatsappURL, "_blank");

    });

    /* INITIAL CART LOAD */

    renderCart();

    window.HOTANI_RENDER_CART = renderCart;

    console.log("HOTANI CART SYSTEM: Loaded successfully.");

})();
