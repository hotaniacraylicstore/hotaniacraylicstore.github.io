
/* ==========================================
   HOTANI ACRYLIC STORE
   PRODUCT MANAGEMENT DATA
========================================== */

window.HOTANI_PRODUCTS_DATA = {

    currency: "PKR",

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
        },

        {
            id: "accessories",
            name: "Acrylic Accessories",
            slug: "accessories"
        },

        {
            id: "wall-decor",
            name: "Wall Decor",
            slug: "wall-decor"
        }

    ],

    products: []

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
