document.addEventListener("DOMContentLoaded", function () {
    // 🔹 Dropdown Menu Logic
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (dropbtn && dropdownContent) {
        dropbtn.addEventListener('click', function (event) {
            event.stopPropagation();
            dropdownContent.classList.toggle('active');
        });

        document.addEventListener('click', function (event) {
            if (!dropdownContent.contains(event.target) && !dropbtn.contains(event.target)) {
                dropdownContent.classList.remove('active');
            }
        });
    }

    // 🔹 FAQ Toggle Logic (Allows Multiple Open FAQs)
    const faqs = document.querySelectorAll(".faq-item h3");

    faqs.forEach((faq) => {
        faq.addEventListener("click", function () {
            const parent = this.parentNode;
            const answer = parent.querySelector("p");

            // Toggle only the clicked FAQ
            parent.classList.toggle("active");

            if (parent.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px"; // Expand
            } else {
                answer.style.maxHeight = null; // Collapse
            }
        });
    });

    // 🔹 Product Carousel Logic
    let currentIndex = 0;
    const carousel = document.querySelector('.product-container');

    if (carousel) {
        const cardWidth = 220;
        const totalCards = carousel.children.length;
        const visibleCards = 3;
        const maxIndex = totalCards - visibleCards;

        function moveCarousel(index) {
            if (index < 0) index = 0;
            else if (index > maxIndex) index = maxIndex;

            currentIndex = index;
            const offset = index * cardWidth * -1;
            carousel.style.transform = `translateX(${offset}px)`;

            document.querySelectorAll('.dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }

        const leftArrow = document.querySelector('.arrow.left');
        const rightArrow = document.querySelector('.arrow.right');
        const dots = document.querySelectorAll('.dot');

        if (leftArrow) leftArrow.addEventListener('click', () => { if (currentIndex > 0) moveCarousel(currentIndex - 1); });
        if (rightArrow) rightArrow.addEventListener('click', () => { moveCarousel(currentIndex + 1); });

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => moveCarousel(i));
        });
    }
});
