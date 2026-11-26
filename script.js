
/* ==========================================
   HOTANI ACRYLIC STORE - JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* STORE SETTINGS */

    const STORE = {
        name: "HOTANI ACRYLIC STORE",
        whatsapp: "", // Yahan WhatsApp number likhen
        currency: "PKR"
    };

    /* ANNOUNCEMENT BAR */

    const announcement = document.getElementById("announcement-bar");

    if (announcement) {
        announcement.innerHTML = `
            <p>✨ Welcome to HOTANI ACRYLIC STORE | Premium Islamic Wall Decor ✨</p>
        `;
    }

    /* HEADER */

    const header = document.getElementById("site-header");

    if (header) {
        header.innerHTML = `
            <div class="header-container">

                <a href="index.html" class="store-logo">
                    <img src="images/logo/Logo.jpg" alt="HOTANI ACRYLIC STORE">
                </a>

                <div class="header-search">
                    <input type="search" id="product-search"
                    placeholder="Search for products...">
                    <button type="button" id="search-button">⌕</button>
                </div>

                <div class="header-icons">
                    <a href="#" aria-label="Account">♙</a>
                    <a href="#" aria-label="Wishlist">♡</a>
                    <a href="#" id="cart-button" aria-label="Cart">
                        🛒 <span id="cart-count">0</span>
                    </a>
                </div>

            </div>
        `;
    }

    /* NAVIGATION */

    const navigation = document.getElementById("main-navigation");

    if (navigation) {
        navigation.innerHTML = `
            <button class="mobile-menu-btn" type="button"
            aria-label="Open menu">☰</button>

            <ul class="navigation-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="#shop-by-category">Categories</a></li>
                <li><a href="#featured-collection">Featured</a></li>
                <li><a href="#islamic-art-collection">Islamic Art</a></li>
                <li><a href="#wall-art-collection">Wall Art</a></li>
                <li><a href="#home-decor-collection">Home Decor</a></li>
                <li><a href="#custom-design">Custom Design</a></li>
                <li><a href="#site-footer">Contact</a></li>
            </ul>
        `;
    }

    /* MOBILE MENU */

    const menuButton = document.querySelector(".mobile-menu-btn");
    const navigationLinks = document.querySelector(".navigation-links");

    if (menuButton && navigationLinks) {

        menuButton.addEventListener("click", function () {
            navigationLinks.classList.toggle("active");
        });

        navigationLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navigationLinks.classList.remove("active");
            });
        });
    }

    /* SHOPPING BENEFITS */

    const benefits = document.getElementById("shopping-benefits");

    if (benefits) {
        benefits.innerHTML = `
            <div class="container benefits-container">
                <div class="benefit-item">
                    <span>🚚</span>
                    <h4>Nationwide Delivery</h4>
                    <p>Delivery Across Pakistan</p>
                </div>

                <div class="benefit-item">
                    <span>✦</span>
                    <h4>Premium Quality</h4>
                    <p>Beautiful Acrylic Designs</p>
                </div>

                <div class="benefit-item">
                    <span>🔒</span>
                    <h4>Secure Shopping</h4>
                    <p>Easy Order Process</p>
                </div>

                <div class="benefit-item">
                    <span>💬</span>
                    <h4>Customer Support</h4>
                    <p>We're Here to Help</p>
                </div>
            </div>
        `;
    }

    /* CATEGORY DATA */

    const categories = [
        {
            name: "Islamic Art",
            folder: "islamic-art",
            image: "images/categories/islamic-art.jpg"
        },
        {
            name: "Wall Art",
            folder: "wall-art",
            image: "images/categories/wall-art.jpg"
        },
        {
            name: "Home Decor",
            folder: "home-decor",
            image: "images/categories/home-decor.jpg"
        },
        {
            name: "Custom Design",
            folder: "custom-design",
            image: "images/categories/custom-design.jpg"
        }
    ];

    /* CATEGORY SECTION */

    const categorySection = document.getElementById("shop-by-category");

    if (categorySection) {
        categorySection.innerHTML = `
            <div class="container">
                <div class="section-heading">
                    <h2>Shop By Category</h2>
                    <div class="gold-line"></div>
                    <p>Explore our premium acrylic collections</p>
                </div>

                <div class="category-grid">
                    ${categories.map(category => `
                        <a class="category-card"
                        href="products/${category.folder}/index.html">

                            <img src="${category.image}"
                            alt="${category.name}"
                            onerror="this.style.display='none'">

                            <div class="category-info">
                                <h3>${category.name}</h3>
                                <span>Explore Collection →</span>
                            </div>

                        </a>
                    `).join("")}
                </div>
            </div>
        `;
    }

    /* COLLECTION PLACEHOLDERS */

    function createCollection(id, title, description) {

        const section = document.getElementById(id);

        if (!section) return;

        section.innerHTML = `
            <div class="container">
                <div class="section-heading">
                    <h2>${title}</h2>
                    <div class="gold-line"></div>
                    <p>${description}</p>
                </div>

                <div class="product-grid" id="${id}-products">
                    <p class="empty-products">
                        Products will be added soon.
                    </p>
                </div>
            </div>
        `;
    }

    createCollection(
        "featured-collection",
        "Featured Collection",
        "Discover our specially selected designs"
    );

    createCollection(
        "islamic-art-collection",
        "Islamic Art Collection",
        "Elegant Islamic calligraphy for your home"
    );

    createCollection(
        "wall-art-collection",
        "Wall Art Collection",
        "Transform your walls with beautiful artwork"
    );

    createCollection(
        "home-decor-collection",
        "Home Decor Collection",
        "Add elegance to every corner of your home"
    );

    createCollection(
        "product-collections",
        "All Products",
        "Explore our complete product collection"
    );

    /* CUSTOM DESIGN */

    const customDesign = document.getElementById("custom-design");

    if (customDesign) {
        customDesign.innerHTML = `
            <div class="container">
                <h2>Looking for a Custom Design?</h2>
                <p>Create a unique acrylic design according to your choice.</p>
                <a href="#" class="btn-primary" id="custom-order">
                    Request Custom Design
                </a>
            </div>
        `;
    }

    /* BRAND STORY */

    const brandStory = document.getElementById("brand-story");

    if (brandStory) {
        brandStory.innerHTML = `
            <div class="container">
                <div class="section-heading">
                    <h2 style="color:#F5F1E8;">About HOTANI ACRYLIC</h2>
                    <div class="gold-line"></div>
                </div>

                <p style="text-align:center;max-width:800px;margin:auto;">
                    HOTANI ACRYLIC brings elegance to your spaces
                    through premium acrylic Islamic art, beautiful
                    wall decor and unique home decoration designs.
                </p>
            </div>
        `;
    }

    /* CUSTOMER REVIEWS */

    const reviews = document.getElementById("customer-reviews");

    if (reviews) {
        reviews.innerHTML = `
            <div class="container">
                <div class="section-heading">
                    <h2>Customer Reviews</h2>
                    <div class="gold-line"></div>
                    <p>What our customers say</p>
                </div>

                <p style="text-align:center;">
                    Customer reviews will appear here.
                </p>
            </div>
        `;
    }

    /* VIDEO SHOWCASE */

    const videoShowcase = document.getElementById("video-showcase");

    if (videoShowcase) {
        videoShowcase.innerHTML = `
            <div class="container">
                <div class="section-heading">
                    <h2>Our Video Showcase</h2>
                    <div class="gold-line"></div>
                    <p>Explore our products in action</p>
                </div>

                <div id="store-videos"></div>
            </div>
        `;
    }

    /* NEWSLETTER */

    const newsletter = document.getElementById("newsletter");

    if (newsletter) {
        newsletter.innerHTML = `
            <div class="container">
                <h2>Stay Connected</h2>
                <p>Follow HOTANI ACRYLIC for new designs and updates.</p>
            </div>
        `;
    }

    /* FOOTER */

    const footer = document.getElementById("site-footer");

    if (footer) {
        footer.innerHTML = `
            <div class="container">
                <h2>HOTANI ACRYLIC STORE</h2>
                <p>Premium Islamic Acrylic Wall Decor</p>

                <div style="margin:20px 0;">
                    <a href="index.html">Home</a> |
                    <a href="#shop-by-category">Categories</a> |
                    <a href="#brand-story">About Us</a> |
                    <a href="#newsletter">Contact</a>
                </div>

                <p>© ${new Date().getFullYear()} HOTANI ACRYLIC STORE.
                All Rights Reserved.</p>
            </div>
        `;
    }

    /* CART STORAGE */

    let cart = JSON.parse(localStorage.getItem("hotaniCart")) || [];

    function updateCartCount() {
        const count = document.getElementById("cart-count");

        if (count) {
            count.textContent = cart.reduce(
                (total, item) => total + item.quantity, 0
            );
        }
    }

    function saveCart() {
        localStorage.setItem("hotaniCart", JSON.stringify(cart));
        updateCartCount();
    }

    /* CART DRAWER */

    const cartDrawer = document.getElementById("cart-drawer");

    if (cartDrawer) {
        cartDrawer.innerHTML = `
            <div style="padding:25px;">
                <button id="close-cart"
                style="float:right;border:0;background:none;font-size:25px;">
                    ×
                </button>

                <h2>Your Shopping Cart</h2>
                <div id="cart-items" style="margin-top:25px;"></div>
                <h3 id="cart-total" style="margin-top:20px;">Total: PKR 0</h3>
                <button id="checkout-button" class="btn-primary"
                style="margin-top:20px;width:100%;">
                    Order on WhatsApp
                </button>
            </div>
        `;
    }

    function renderCart() {

        const itemsContainer = document.getElementById("cart-items");
        const totalElement = document.getElementById("cart-total");

        if (!itemsContainer || !totalElement) return;

        if (cart.length === 0) {
            itemsContainer.innerHTML = "<p>Your cart is empty.</p>";
            totalElement.textContent = "Total: PKR 0";
            return;
        }

        let total = 0;

        itemsContainer.innerHTML = cart.map((item, index) => {
            total += item.price * item.quantity;

            return `
                <div style="padding:12px 0;border-bottom:1px solid #ddd;">
                    <strong>${item.name}</strong>
                    <p>PKR ${item.price} × ${item.quantity}</p>

                    <button data-remove="${index}" type="button">
                        Remove
                    </button>
                </div>
            `;
        }).join("");

        totalElement.textContent = "Total: PKR " + total;
    }

    const cartButton = document.getElementById("cart-button");

    if (cartButton && cartDrawer) {
        cartButton.addEventListener("click", function (event) {
            event.preventDefault();
            cartDrawer.classList.add("active");
            renderCart();
        });
    }

    document.addEventListener("click", function (event) {

        if (event.target.id === "close-cart") {
            cartDrawer.classList.remove("active");
        }

        if (event.target.dataset.remove !== undefined) {
            cart.splice(Number(event.target.dataset.remove), 1);
            saveCart();
            renderCart();
        }
    });

    /* WHATSAPP CHECKOUT */

    const checkoutButton = document.getElementById("checkout-button");

    if (checkoutButton) {
        checkoutButton.addEventListener("click", function () {

            if (cart.length === 0) {
                alert("Your cart is empty.");
                return;
            }

            if (!STORE.whatsapp) {
                alert("WhatsApp number will be added soon.");
                return;
            }

            let message = "Assalam o Alaikum! I want to place an order:\n\n";
            let total = 0;

            cart.forEach(function (item) {
                message += `${item.name} - ${item.quantity} x PKR ${item.price}\n`;
                total += item.price * item.quantity;
            });

            message += `\nTotal: PKR ${total}`;

            window.open(
                "https://wa.me/" + STORE.whatsapp +
                "?text=" + encodeURIComponent(message),
                "_blank"
            );
        });
    }

    /* PRODUCT SEARCH */

    const searchInput = document.getElementById("product-search");
    const searchButton = document.getElementById("search-button");

    function searchProducts() {

        if (!searchInput) return;

        const searchTerm = searchInput.value.trim().toLowerCase();

        document.querySelectorAll(".product-card").forEach(function (card) {
            const productName = card.textContent.toLowerCase();

            card.style.display = productName.includes(searchTerm)
                ? ""
                : "none";
        });
    }

    if (searchButton) {
        searchButton.addEventListener("click", searchProducts);
    }

    if (searchInput) {
        searchInput.addEventListener("input", searchProducts);
    }

    /* INITIALIZE */

    updateCartCount();

});
