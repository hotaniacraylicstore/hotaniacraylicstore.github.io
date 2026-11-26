
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
