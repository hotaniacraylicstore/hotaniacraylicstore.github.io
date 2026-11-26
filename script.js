
/* =================================
   HOTANI ACRYLIC STORE
   Main JavaScript
================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("HOTANI ACRYLIC STORE Loaded Successfully");

    // WEBSITE SECTIONS
    const sections = [
        "announcement-bar",
        "site-header",
        "main-navigation",
        "hero-banner",
        "shop-by-category",
        "featured-collection",
        "product-collections",
        "custom-design",
        "brand-story",
        "customer-reviews",
        "newsletter",
        "site-footer"
    ];

    // CHECK ALL WEBSITE SECTIONS
    sections.forEach(function (sectionId) {

        const section = document.getElementById(sectionId);

        if (!section) {
            console.warn("Section missing:", sectionId);
        }

    });

    // PRODUCT COLLECTIONS
    const productCategories = [
        {
            name: "Islamic Art",
            folder: "islamic-art",
            products: []
        },
        {
            name: "Wall Art",
            folder: "wall-art",
            products: []
        },
        {
            name: "Home Decor",
            folder: "home-decor",
            products: []
        },
        {
            name: "Custom Design",
            folder: "custom-design",
            products: []
        }
    ];

    // GLOBAL STORE DATA
    window.HOTANI_STORE = {
        name: "HOTANI ACRYLIC STORE",
        currency: "PKR",
        categories: productCategories
    };

});

/* ANNOUNCEMENT BAR */

document.getElementById("announcement-bar").innerHTML = `
    <p>✨ Welcome to HOTANI ACRYLIC STORE | Premium Islamic Wall Decor ✨</p>
`;


/* HEADER */

document.getElementById("site-header").innerHTML = `
    <div class="header-container">

        <a href="index.html" class="store-logo">
            <img src="images/logo/Logo.jpg" alt="HOTANI ACRYLIC STORE">
        </a>

        <div class="header-search">
            <input type="search" placeholder="Search for products...">
            <button type="button">⌕</button>
        </div>

        <div class="header-icons">
            <a href="#" aria-label="Account">♙</a>
            <a href="#" aria-label="Wishlist">♡</a>
            <a href="#" aria-label="Cart">🛒 <span>0</span></a>
        </div>

    </div>
`;


/* MAIN NAVIGATION */

document.getElementById("main-navigation").innerHTML = `
    <button class="mobile-menu-btn" type="button">☰</button>

    <ul class="navigation-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="#shop-by-category">Categories</a></li>
        <li><a href="#featured-collection">Featured</a></li>
        <li><a href="#product-collections">Shop All</a></li>
        <li><a href="#custom-design">Custom Design</a></li>
        <li><a href="#brand-story">About Us</a></li>
        <li><a href="#site-footer">Contact</a></li>
    </ul>
`;


/* MOBILE MENU */

const menuButton = document.querySelector(".mobile-menu-btn");
const navigationLinks = document.querySelector(".navigation-links");

menuButton.addEventListener("click", function () {
    navigationLinks.classList.toggle("active");
});

document.querySelectorAll(".navigation-links a").forEach(link => {
    link.addEventListener("click", function () {
        navigationLinks.classList.remove("active");
    });
});
