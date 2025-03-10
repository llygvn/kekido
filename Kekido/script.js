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

            parent.classList.toggle("active");

            if (parent.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
});
