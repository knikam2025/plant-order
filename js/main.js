


// js  start or payment confirmation page



        function updateSubmissionCount() {
            let count = localStorage.getItem('submissionCount');
            count = count ? parseInt(count) + 1 : 1;
            localStorage.setItem('submissionCount', count);
            document.getElementById('submissionCountDisplay').innerText = `Submissions: ${count}`;
        }

        // Function to update the total price
        function updateTotalPrice() {
            let totalPrice = 0;
            document.querySelectorAll('.product-card').forEach(card => {
                const priceElement = card.querySelector('.price');
                const quantity = parseInt(card.querySelector('.quantity span').innerText);
                const price = parseInt(priceElement.getAttribute('data-price'));
                totalPrice += price * quantity;
            });
            document.querySelector('.price12').innerText = `₹ ${totalPrice}`;
        }

        // Function that update quantity
        function updateQuantity(event, increment) {
            const span = event.target.parentNode.querySelector('span');
            let currentQuantity = parseInt(span.innerText);
            currentQuantity = increment ? currentQuantity + 1 : currentQuantity - 1;
            if (currentQuantity < 1) currentQuantity = 1;  // Ensure quantity doesn't go below 1
            span.innerText = currentQuantity;
            updateTotalPrice();
        }

        // added the event listeners to quantity buttons
        document.querySelectorAll('.increment').forEach(button => {
            button.addEventListener('click', function (event) {
                updateQuantity(event, true);
            });
        });

        document.querySelectorAll('.decrement').forEach(button => {
            button.addEventListener('click', function (event) {
                updateQuantity(event, false);
            });
        });

        // Placing the new Order button event listener
        document.getElementById('orderButton').addEventListener('click', function () {
            updateSubmissionCount();
            alert('Order placed successfully!');
        });

        // to display  submission count on page load
        document.addEventListener('DOMContentLoaded', function () {
            let count = localStorage.getItem('submissionCount');
            count = count ? parseInt(count) : 0;
            const submissionCountDisplay = document.createElement('p');
            submissionCountDisplay.id = 'submissionCountDisplay';
            submissionCountDisplay.innerText = `Submissions: ${count}`;
            document.body.insertBefore(submissionCountDisplay, document.body.firstChild);
            updateTotalPrice(); // Initialize total price on load
        });

        var swiper = new Swiper('.swiper', {
            slidesPerView: 3,
            direction: getDirection(),
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                resize: function () {
                    swiper.changeDirection(getDirection());
                },
            },
        });

        function getDirection() {
            var windowWidth = window.innerWidth;
            var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
            return direction;
        }
   


        // end 
