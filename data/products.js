
/* ==========================================
   HOTANI ACRYLIC STORE
   PRODUCT MANAGEMENT DATA
========================================== */

window.HOTANI_PRODUCTS_DATA = {

    /* STORE SETTINGS */
    currency: "PKR",

    /* PRODUCT CATEGORIES */
    categories: [
        {
            id: "islamic-calligraphy",
            name: "Islamic Calligraphy",
            slug: "islamic-calligraphy"
        },
        {
            id: "modern-wall-art",
            name: "Modern Wall Art",
            slug: "modern-wall-art"
        },
        {
            id: "acrylic-mirrors",
            name: "Acrylic Mirrors",
            slug: "acrylic-mirrors"
        },
        {
            id: "wall-clocks",
            name: "Wall Clocks",
            slug: "wall-clocks"
        },
        {
            id: "custom-plates",
            name: "Custom Name & Number Plates",
            slug: "custom-plates"
        }
    ],

    /* ALL PRODUCTS */
    products: [

        /*
        PRODUCT ADD KARNE KA FORMAT:

        {
            id: "product-001",
            name: "Product Name",
            category: "islamic-calligraphy",
            price: 3500,
            offerPrice: 2999,
            image: "images/products/product-001.jpg",
            description: "Product description",
            stock: 20,
            featured: true,
            badge: "Sale"
        }

        offerPrice: Agar offer nahi hai to null likhein.
        featured: true = Homepage par featured product.
        */

    ]

};


/* ==========================================
   PRODUCT HELPER FUNCTIONS
========================================== */

window.HOTANI_GET_PRODUCTS = function () {
    return window.HOTANI_PRODUCTS_DATA.products;
};

window.HOTANI_GET_PRODUCT = function (productId) {
    return window.HOTANI_PRODUCTS_DATA.products.find(
        product => product.id === productId
    );
};

window.HOTANI_GET_PRODUCTS_BY_CATEGORY = function (categoryId) {
    return window.HOTANI_PRODUCTS_DATA.products.filter(
        product => product.category === categoryId
    );
};

window.HOTANI_GET_FEATURED_PRODUCTS = function () {
    return window.HOTANI_PRODUCTS_DATA.products.filter(
        product => product.featured === true
    );
};

