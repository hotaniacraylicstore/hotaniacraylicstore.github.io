
/* ==========================================
   HOTANI ACRYLIC STORE
   MAIN JAVASCRIPT
========================================== */

window.HOTANI_STORE = {
    name: "HOTANI ACRYLIC STORE",
    whatsapp: "",
    currency: "PKR"
};


/* ==========================================
   LOAD WEBSITE FILES
========================================== */

const sectionFiles = [

    // PRODUCT DATA - LOAD FIRST
    "data/products.js",

    // WEBSITE SECTIONS
    "sections/announcement.js",
    "sections/header.js",
    "sections/cart.js",
    "sections/navigation.js",
    "sections/hero-slider.js",
    "sections/benefits.js",
    "sections/categories.js",
    "sections/islamic-calligraphy.js",
    "sections/modern-wall-art.js",
    "sections/acrylic-mirrors.js",
    "sections/wall-clocks.js",

    // NEW COLLECTION SECTIONS
    "sections/accessories.js",
    "sections/wall-decor.js",

    // OTHER SECTIONS
    "sections/custom-plates.js",
    "sections/stock-announcement.js",
    "sections/reviews.js",
    "sections/why-choose-us.js",
    "sections/video-showcase.js",
    "sections/newsletter.js",
    "sections/footer.js",

    // PRODUCT DISPLAY - LOAD LAST
    "products/render-products.js"

];


/* ==========================================
   LOAD FILES ONE BY ONE
========================================== */

function loadSectionFiles(index = 0) {

    if (index >= sectionFiles.length) {
        initializeStore();
        return;
    }

    const script = document.createElement("script");

    script.src = sectionFiles[index];

    script.onload = function () {
        loadSectionFiles(index + 1);
    };

    script.onerror = function () {

        console.error(
            "File failed to load:",
            sectionFiles[index]
        );

        loadSectionFiles(index + 1);
    };

    document.body.appendChild(script);
}


/* ==========================================
   INITIALIZE STORE
========================================== */

function initializeStore() {

    initializeMobileMenu();

    initializeSearch();

    initializeCart();

    initializeNewsletter();

}


/* ==========================================
   MOBILE MENU
========================================== */

function initializeMobileMenu() {

    const menuButton =
        document.getElementById("mobile-menu-btn");

    const navigation =
        document.getElementById("main-navigation");

    if (!menuButton || !navigation) return;

    menuButton.addEventListener("click", function () {

        navigation.classList.toggle("mobile-menu-open");

    });

    navigation.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function () {

            navigation.classList.remove("mobile-menu-open");

        });

    });

}


/* ==========================================
   SEARCH
========================================== */

function initializeSearch() {

    const searchInput =
        document.getElementById("store-search");

    const searchButton =
        document.getElementById("search-button");

    if (!searchInput) return;

    function searchProducts() {

        const query = searchInput.value.trim();

        if (!query) {
            searchInput.focus();
            return;
        }

        window.location.href =
            "pages/search.html?q=" +
            encodeURIComponent(query);

    }

    if (searchButton) {

        searchButton.addEventListener(
            "click",
            searchProducts
        );

    }

    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            searchProducts();
        }

    });

}


/* ==========================================
   CART STORAGE
========================================== */

let storeCart = [];


function loadCartData() {

    try {

        storeCart = JSON.parse(
            localStorage.getItem("hotani_cart")
        ) || [];

    } catch (error) {

        storeCart = [];

    }

}


function saveCartData() {

    localStorage.setItem(
        "hotani_cart",
        JSON.stringify(storeCart)
    );

}


/* ==========================================
   ADD TO CART
========================================== */

window.HOTANI_ADD_TO_CART = function (product) {

    if (!product || !product.id) {

        console.error("Invalid product information.");

        return;

    }

    const quantity = Math.max(
        1,
        Number(product.quantity) || 1
    );

    const existingProduct = storeCart.find(
        item => item.id === product.id
    );

    if (existingProduct) {

        existingProduct.quantity += quantity;

    } else {

        storeCart.push({

            id: product.id,

            name: product.name || "Product",

            price: Number(product.price) || 0,

            quantity: quantity,

            image: product.image || ""

        });

    }

    saveCartData();

    updateCartDisplay();

    openCartDrawer();

};


/* ==========================================
   REMOVE FROM CART
========================================== */

window.HOTANI_REMOVE_FROM_CART = function (productId) {

    storeCart = storeCart.filter(
        item => item.id !== productId
    );

    saveCartData();

    updateCartDisplay();

};


/* ==========================================
   CHANGE QUANTITY
========================================== */

window.HOTANI_CHANGE_QUANTITY = function (
    productId,
    change
) {

    const product = storeCart.find(
        item => item.id === productId
    );

    if (!product) return;

    product.quantity += Number(change);

    if (product.quantity <= 0) {

        window.HOTANI_REMOVE_FROM_CART(productId);

        return;

    }

    saveCartData();

    updateCartDisplay();

};


/* ==========================================
   CART DISPLAY
========================================== */

function updateCartDisplay() {

    const cartCount =
        document.getElementById("cart-count");

    const cartItems =
        document.getElementById("cart-items");

    const cartTotal =
        document.getElementById("cart-total");


    const totalQuantity = storeCart.reduce(
        (total, item) => total + item.quantity,
        0
    );


    const totalPrice = storeCart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );


    if (cartCount) {
        cartCount.textContent = totalQuantity;
    }


    if (cartTotal) {

        cartTotal.textContent =
            "Rs. " +
            totalPrice.toLocaleString("en-PK");

    }


    if (!cartItems) return;


    if (storeCart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is currently empty.
            </p>
        `;

        return;

    }


    cartItems.innerHTML = storeCart.map(item => `

        <div class="cart-item">

            <img
                src="${escapeHTML(item.image)}"
                alt="${escapeHTML(item.name)}"
            >

            <div class="cart-item-details">

                <h4>${escapeHTML(item.name)}</h4>

                <p>
                    Rs. ${item.price.toLocaleString("en-PK")}
                </p>

                <div class="cart-quantity">

                    <button
                        onclick="HOTANI_CHANGE_QUANTITY('${escapeHTML(item.id)}', -1)"
                    >
                        −
                    </button>

                    <span>${item.quantity}</span>

                    <button
                        onclick="HOTANI_CHANGE_QUANTITY('${escapeHTML(item.id)}', 1)"
                    >
                        +
                    </button>

                </div>

            </div>

            <button
                class="remove-cart-item"
                onclick="HOTANI_REMOVE_FROM_CART('${escapeHTML(item.id)}')"
            >
                ×
            </button>

        </div>

    `).join("");

}


/* ==========================================
   HTML SAFETY
========================================== */

function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, function (char) {

        return {

            "&": "&amp;",

            "<": "&lt;",

            ">": "&gt;",

            '"': "&quot;",

            "'": "&#039;"

        }[char];

    });

}


/* ==========================================
   CART DRAWER
========================================== */

function openCartDrawer() {

    const drawer =
        document.getElementById("cart-drawer");

    if (drawer) {
        drawer.classList.add("cart-open");
    }

}


function closeCartDrawer() {

    const drawer =
        document.getElementById("cart-drawer");

    if (drawer) {
        drawer.classList.remove("cart-open");
    }

}


/* ==========================================
   INITIALIZE CART
========================================== */

function initializeCart() {

    loadCartData();

    updateCartDisplay();


    const cartButton =
        document.getElementById("open-cart");

    const drawer =
        document.getElementById("cart-drawer");

    const checkoutButton =
        document.getElementById("checkout-button");


    if (cartButton) {

        cartButton.addEventListener(
            "click",
            openCartDrawer
        );

    }


    if (drawer) {

        drawer.addEventListener("click", function (event) {

            if (

                event.target.closest("#close-cart") ||

                event.target.classList.contains("cart-overlay")

            ) {

                closeCartDrawer();

            }

        });

    }


    if (checkoutButton) {

        checkoutButton.addEventListener(
            "click",
            checkoutOnWhatsApp
        );

    }

}


/* ==========================================
   WHATSAPP CHECKOUT
========================================== */

function checkoutOnWhatsApp() {

    if (storeCart.length === 0) {

        alert("Your cart is empty.");

        return;

    }


    const phone = window.HOTANI_STORE.whatsapp;


    if (!phone) {

        alert("WhatsApp number will be added soon.");

        return;

    }


    let message =
        "Assalam-o-Alaikum! I want to place an order:\n\n";


    storeCart.forEach((item, index) => {

        message +=
            `${index + 1}. ${item.name}\n` +
            `Quantity: ${item.quantity}\n` +
            `Price: Rs. ${item.price * item.quantity}\n\n`;

    });


    const total = storeCart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );


    message +=
        `Total: Rs. ${total}\n\nPlease confirm my order.`;


    const whatsappURL =
        "https://wa.me/" +
        phone.replace(/\D/g, "") +
        "?text=" +
        encodeURIComponent(message);


    window.open(whatsappURL, "_blank");

}


/* ==========================================
   NEWSLETTER
========================================== */

function initializeNewsletter() {

    const form =
        document.getElementById("newsletter-form");

    if (!form) return;

    form.addEventListener("submit", function (event) {

        event.preventDefault();

    });

}


/* ==========================================
   START WEBSITE
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    loadSectionFiles();

});
