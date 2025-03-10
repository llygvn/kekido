document.addEventListener("DOMContentLoaded", function () {
    // 🔹 All Products Dropdown Menu Logic
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

    // 🔹 Availability & Price Filter Dropdowns
    document.querySelectorAll(".dropthatdownformebaby").forEach(dropdown => {
        const button = dropdown.querySelector(".dropbutton");
        const menu = dropdown.querySelector("div");

        if (button && menu) {
            button.addEventListener("click", function (event) {
                event.stopPropagation(); // Prevents dropdown from closing immediately
                menu.classList.toggle("active");
            });

            document.addEventListener("click", function (event) {
                if (!menu.contains(event.target) && !button.contains(event.target)) {
                    menu.classList.remove("active");
                }
            });

            menu.addEventListener("click", function (event) {
                event.stopPropagation(); // Prevents dropdown from closing when clicking inside
            });
        }
    });

    // 🔹 FAQ Toggle Logic (Allows Multiple Open FAQs)
    const faqs = document.querySelectorAll(".faq-item h3");

    faqs.forEach((faq) => {
        faq.addEventListener("click", function () {
            const parent = this.parentNode;
            const answer = parent.querySelector("p");

            parent.classList.toggle("active");

            if (parent.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
});
