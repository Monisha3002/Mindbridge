window.addEventListener('DOMContentLoaded', () => {
    const carList = document.getElementById('carList');
    function selectCar(model, pricePerDay) {
        const carDetails = {
            model: model,
            pricePerDay: pricePerDay
        };
        localStorage.setItem('selectedCar', JSON.stringify(carDetails));
    }
    const cars = JSON.parse(localStorage.getItem('cars')) || [];
    if (cars.length === 0) {
        carList.innerHTML = "<p>No cars available. Please add cars via the Admin Panel.</p>";
    } else {
        cars.forEach(car => {
            const carCard = document.createElement('article');
            carCard.classList.add('car-card');
            carCard.innerHTML = `
                <img src="${car.image}" alt="${car.model}" class="car-image">
                <div class="car-details">
                    <h2 class="car-title">${car.model}</h2>
                    <p class="car-price">₹${car.pricePerDay}/day</p>
                    <a href="book.html" class="book-now" data-model="${car.model}" data-price="${car.pricePerDay}">Book Now</a>
                </div>
            `;
            carList.appendChild(carCard);
        });
        carList.addEventListener('click', function(event) {
            if (event.target.classList.contains('book-now')) {
                const model = event.target.getAttribute('data-model');
                const price = event.target.getAttribute('data-price');
                bookNow(model, price);
            }
        });
        function bookNow(model, price) {
            const selectedCar = { model, pricePerDay: price };
            localStorage.setItem('selectedCar', JSON.stringify(selectedCar));
            window.location.href = 'book.html';
        }
    }
});
