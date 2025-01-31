document.addEventListener('DOMContentLoaded', () => {
    const addCarForm = document.getElementById('addCarForm');
    const carList = document.getElementById('carList');
    function loadCars() {
        const cars = JSON.parse(localStorage.getItem('cars')) || [];
        carList.innerHTML = '';

        cars.forEach((car, index) => {
            const carItem = document.createElement('div');
            carItem.classList.add('car-item');
            carItem.innerHTML = `
                <span>${car.model} - ₹${car.pricePerDay}/day</span>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;
            carList.appendChild(carItem);
        });
    }
    function addCar(event) {
        event.preventDefault();

        const carModel = document.getElementById('carModel').value;
        const pricePerDay = parseFloat(document.getElementById('pricePerDay').value);
        const cars = JSON.parse(localStorage.getItem('cars')) || [];
        cars.push({ model: carModel, pricePerDay });
        localStorage.setItem('cars', JSON.stringify(cars));
        addCarForm.reset();
        loadCars();
    }
    function removeCar(index) {
        const cars = JSON.parse(localStorage.getItem('cars')) || [];
        cars.splice(index, 1);
        localStorage.setItem('cars', JSON.stringify(cars));
        loadCars();
    }
    addCarForm.addEventListener('submit', addCar);
    carList.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-btn')) {
            const index = event.target.dataset.index;
            removeCar(index);
        }
    });
    loadCars();
});
