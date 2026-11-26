
/* HOTANI ACRYLIC STORE - HERO SLIDER */

(function () {
    const hero = document.getElementById("hero-banner");
    if (!hero) return;

    const slides = [
        {
            image: "images/banners/hotani-acrylic-hero-banner.jpg",
            title: "Transform Your Walls",
            subtitle: "Discover Premium Acrylic Wall Decor",
            button: "Shop Now",
            link: "#shop-by-category"
        },
        {
            image: "images/banners/banner-2.jpg",
            title: "Beautiful Islamic Calligraphy",
            subtitle: "Bring elegance and spirituality to your home",
            button: "Explore Collection",
            link: "#islamic-art-collection"
        },
        {
            image: "images/banners/banner-3.jpg",
            title: "Decorate Your Space",
            subtitle: "Explore Our Exclusive Wall Art Collection",
            button: "View Products",
            link: "#wall-art-collection"
        }
    ];

    let currentSlide = 0;

    hero.innerHTML = `
        <div class="hero-slider">
            <div class="hero-slide-image"></div>
            <div class="hero-overlay">
                <div class="hero-content">
                    <h1></h1>
                    <p></p>
                    <a class="hero-button"></a>
                </div>
            </div>
            <button class="hero-arrow hero-prev" aria-label="Previous slide">‹</button>
            <button class="hero-arrow hero-next" aria-label="Next slide">›</button>
            <div class="hero-dots"></div>
        </div>
    `;

    const image = hero.querySelector(".hero-slide-image");
    const title = hero.querySelector("h1");
    const subtitle = hero.querySelector(".hero-content p");
    const button = hero.querySelector(".hero-button");
    const dots = hero.querySelector(".hero-dots");

    slides.forEach((slide, index) => {
        const dot = document.createElement("button");
        dot.className = "hero-dot";
        dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
        dot.addEventListener("click", () => showSlide(index));
        dots.appendChild(dot);
    });

    function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length;
        const slide = slides[currentSlide];

        image.style.backgroundImage = `url("${slide.image}")`;
        title.textContent = slide.title;
        subtitle.textContent = slide.subtitle;
        button.textContent = slide.button;
        button.href = slide.link;

        dots.querySelectorAll(".hero-dot").forEach((dot, i) => {
            dot.classList.toggle("active", i === currentSlide);
        });
    }

    hero.querySelector(".hero-prev").addEventListener("click", () => {
        showSlide(currentSlide - 1);
    });

    hero.querySelector(".hero-next").addEventListener("click", () => {
        showSlide(currentSlide + 1);
    });

    showSlide(0);

    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3000);
})();
