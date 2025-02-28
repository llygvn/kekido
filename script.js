
        document.addEventListener("DOMContentLoaded", function() {
          const dropbtn = document.querySelector('.dropbtn');
          const dropdownContent = document.querySelector('.dropdown-content');
    
          dropbtn.addEventListener('click', function(event) {
            event.stopPropagation();
            dropdownContent.classList.toggle('active');
          });
    
          document.addEventListener('click', function(event) {
            if (!dropdownContent.contains(event.target) && !dropbtn.contains(event.target)) {
              dropdownContent.classList.remove('active');
            }
          });
        });


        let currentIndex = 0; 

        function moveCarousel(index) {
            const carousel = document.querySelector('.product-container');
            const cardWidth = 220; 
            const totalCards = carousel.children.length;
            const visibleCards = 3; 
            const maxIndex = totalCards - visibleCards; 
        
            
            if (index < 0) {
                index = 0; 
            } else if (index > maxIndex) {
                index = maxIndex; 
            }
        
            currentIndex = index; 
        
            const offset = index * cardWidth * -1;
            carousel.style.transform = `translateX(${offset}px)`;
        
            document.querySelectorAll('.dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
        
        document.querySelector('.arrow.left').addEventListener('click', () => {
            if (currentIndex > 0) moveCarousel(currentIndex - 1);
        });
        document.querySelector('.arrow.right').addEventListener('click', () => {
            moveCarousel(currentIndex + 1);
        });

        document.querySelectorAll('.dot').forEach((dot, i) => {
            dot.addEventListener('click', () => moveCarousel(i));
        });
        