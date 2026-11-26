
/* =========================================
   HOTANI ACRYLIC STORE
   MAIN JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", async function () {

    /* STORE SETTINGS */

    window.HOTANI_STORE = {
        name: "HOTANI ACRYLIC STORE",
        whatsapp: "", // WhatsApp number baad mein add hoga
        currency: "PKR",
        currencySymbol: "Rs."
    };


    /* LOAD WEBSITE SECTIONS */

    const sectionFiles = [
        "sections/announcement.js",
        "sections/header.js",
        "sections/navigation.js",
        "sections/hero-slider.js",
        "sections/benefits.js",
        "sections/categories.js",
        "sections/islamic-calligraphy.js",
        "sections/modern-wall-art.js",
        "sections/acrylic-mirrors.js",
        "sections/custom-plates.js",
        "sections/stock-announcement.js",
        "sections/reviews.js",
        "sections/why-choose-us.js",
        "sections/video-showcase.js",
        "sections/footer.js"
    ];

    async function loadSection(file) {

        return new Promise(function (resolve) {

            const script = document.createElement("script");

            script.src = file;
            script.onload = resolve;

            script.onerror = function () {
                console.warn("Section file not created yet:", file);
                resolve();
            };

            document.body.appendChild(script);

        });
    }

    for (const file of sectionFiles) {
        await loadSection(file);
    }


    /* MOBILE NAVIGATION */

    document.addEventListener("click", function (event) {

        const menuButton = event.target.closest(".mobile-menu-btn");
        const navigation = document.querySelector(".navigation-links");

        if (menuButton && navigation) {
            navigation.classList.toggle("active");
        }

        const navLink = event.target.closest(".navigation-links a");

        if (navLink && navigation) {
            navigation.classList.remove("active");
        }

    });


    /* SEARCH PRODUCTS */

    function searchProducts() {

        const input = document.getElementById("product-search");

        if (!input) return;

        const searchTerm = input.value.trim().toLowerCase();

        document.querySelectorAll(".product-card").forEach(function (card) {

            const productName = card.textContent.toLowerCase();

            card.style.display =
                productName.includes(searchTerm) ? "" : "none";

        });

    }

    document.addEventListener("click", function (event) {

        if (event.target.closest("#search-button")) {
            searchProducts();
        }

    });

    document.addEventListener("input", function (event) {

        if (event.target.id === "product-search") {
            searchProducts();
        }

    });


    /* SHOPPING CART */

    let cart = [];

    try {
        cart = JSON.parse(localStorage.getItem("hotaniCart")) || [];
    } catch (error) {
        cart = [];
    }

    function saveCart() {

        localStorage.setItem("hotaniCart", JSON.stringify(cart));

        updateCartCount();
        renderCart();

    }

    function updateCartCount() {

        const countElement = document.getElementById("cart-count");

        const totalItems = cart.reduce(function (total, item) {
            return total + Number(item.quantity || 0);
        }, 0);

        if (countElement) {
            countElement.textContent = totalItems;
        }

    }

    function renderCart() {

        const cartItems = document.getElementById("cart-items");
        const cartTotal = document.getElementById("cart-total");

        if (!cartItems || !cartTotal) return;

        if (cart.length === 0) {

            cartItems.innerHTML = "<p>Your cart is empty.</p>";
            cartTotal.textContent = "Total: Rs. 0";

            return;

        }

        let total = 0;

        cartItems.innerHTML = cart.map(function (item, index) {

            const itemTotal = Number(item.price) * Number(item.quantity);

            total += itemTotal;

            return `
                <div class="cart-item">

                    <h4>${item.name}</h4>

                    <p>Rs. ${item.price}</p>

                    <div class="cart-quantity">

                        <button type="button"
                            data-cart-action="decrease"
                            data-index="${index}">−</button>

                        <span>${item.quantity}</span>

                        <button type="button"
                            data-cart-action="increase"
                            data-index="${index}">+</button>

                    </div>

                    <button type="button"
                        data-cart-action="remove"
                        data-index="${index}">
                        Remove
                    </button>

                </div>
            `;

        }).join("");

        cartTotal.textContent = "Total: Rs. " + total.toLocaleString("en-PK");

    }


    /* ADD PRODUCT TO CART */

    window.HOTANI_ADD_TO_CART = function (product) {

        if (!product || !product.id || !product.name) {
            console.error("Invalid product information.");
            return;
        }

        const existingProduct = cart.find(function (item) {
            return item.id === product.id;
        });

        if (existingProduct) {

            existingProduct.quantity += Number(product.quantity || 1);

        } else {

            cart.push({
                id: product.id,
                name: product.name,
                price: Number(product.price),
                quantity: Number(product.quantity || 1),
                image: product.image || ""
            });

        }

        saveCart();

        const drawer = document.getElementById("cart-drawer");

        if (drawer) {
            drawer.classList.add("active");
        }

    };


    /* CART BUTTON */

    document.addEventListener("click", function (event) {

        if (event.target.closest("#cart-button")) {

            event.preventDefault();

            const drawer = document.getElementById("cart-drawer");

            if (drawer) {
                drawer.classList.add("active");
                renderCart();
            }

        }

        if (event.target.closest("#close-cart")) {

            const drawer = document.getElementById("cart-drawer");

            if (drawer) {
                drawer.classList.remove("active");
            }

        }

    });


    /* CART QUANTITY AND REMOVE */

    document.addEventListener("click", function (event) {

        const button = event.target.closest("[data-cart-action]");

        if (!button) return;

        const index = Number(button.dataset.index);
        const action = button.dataset.cartAction;

        if (!cart[index]) return;

        if (action === "increase") {
            cart[index].quantity++;
        }

        if (action === "decrease") {

            cart[index].quantity--;

            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }

        }

        if (action === "remove") {
            cart.splice(index, 1);
        }

        saveCart();

    });


    /* WHATSAPP ORDER */

    function sendWhatsAppOrder() {

        if (cart.length === 0) {
            alert("Your cart is empty.");
            return;
        }

        const phone = window.HOTANI_STORE.whatsapp;

        if (!phone) {
            alert("WhatsApp number has not been added yet.");
            return;
        }

        let message = "Assalam o Alaikum! I want to place an order:\n\n";

        let total = 0;

        cart.forEach(function (item) {

            const itemTotal = item.price * item.quantity;

            total += itemTotal;

            message +=
                item.name +
                " | Quantity: " + item.quantity +
                " | Price: Rs. " + itemTotal + "\n";

        });

        message += "\nTotal: Rs. " + total;

        const url =
            "https://wa.me/" +
            phone.replace(/\D/g, "") +
            "?text=" +
            encodeURIComponent(message);

        window.open(url, "_blank");

    }

    document.addEventListener("click", function (event) {

        if (event.target.closest("#checkout-button")) {
            sendWhatsAppOrder();
        }

    });


    /* CLOSE CART WITH ESCAPE */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            const drawer = document.getElementById("cart-drawer");

            if (drawer) {
                drawer.classList.remove("active");
            }

        }

    });


    /* INITIALIZE CART */

    updateCartCount();
    renderCart();


    /* STORE READY */

    console.log("HOTANI ACRYLIC STORE initialized successfully.");

});
