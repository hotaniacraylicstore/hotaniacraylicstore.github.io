
/* ==========================================
   INITIALIZE STORE
========================================== */

function initializeStore() {

    initializeMobileMenu();

    initializeSearch();

    initializeCart();

    initializeNewsletter();

    // Refresh Shop by Category after products load
    if (window.HOTANI_REFRESH_CATEGORIES) {
        window.HOTANI_REFRESH_CATEGORIES();
    }

}
