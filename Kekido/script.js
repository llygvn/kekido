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

    
   // PRICE FILTER
const priceSortOptions = document.querySelectorAll(".price-sort-option");

let productContainer = document.querySelector(".product-container") || document.querySelector(".bread-container");

// Detect products dynamically
let products = Array.from(document.querySelectorAll(".product-card")) || Array.from(document.querySelectorAll(".bread-card"));

console.log("🔍 Detected Container:", productContainer);
console.log("🔍 Detected Products:", products);

if (!productContainer || products.length === 0) {
    console.error("❌ ERROR: Elements not found. Check class names in HTML!");
    return;
}

// Sorting functionality
priceSortOptions.forEach(option => {
    option.addEventListener("click", function (event) {
        event.preventDefault(); 

        console.log("🔄 Sorting triggered:", this.dataset.sort);

        let sortedProducts = [...products]; // Copy array before sorting
        sortedProducts.sort((a, b) => {
            return this.dataset.sort === "low-to-high"
                ? getPrice(a) - getPrice(b)
                : getPrice(b) - getPrice(a);
        });

        console.log("✅ Sorted Prices:", sortedProducts.map(p => getPrice(p)));

        // Reorder products inside the container
        sortedProducts.forEach(product => productContainer.appendChild(product));
    });
});

// Function to extract price from product elements
function getPrice(product) {
    let priceElement = product.querySelector(".product-price"); // Standardized price selector
    if (!priceElement) return 0; // Prevent errors

    let priceText = priceElement.textContent.replace(/[^\d.]/g, "").trim(); // Remove non-numeric characters
    let price = parseFloat(priceText);

    console.log(`💰 Extracted Price for ${product.className}:`, price);
    return isNaN(price) ? 0 : price;
}


    // FAQs
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
