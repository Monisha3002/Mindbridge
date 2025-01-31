document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('bookingForm');
    const totalCostInput = document.getElementById('totalCost');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const rentalDetails = document.getElementById('rentalDetails');
    const selectedCar = JSON.parse(localStorage.getItem('selectedCar')) || {};

    if (selectedCar.model && selectedCar.pricePerDay) {
        document.getElementById('carModel').value = selectedCar.model;
        document.getElementById('pricePerDay').value = selectedCar.pricePerDay;
        console.log('Selected Car Loaded:', selectedCar);
    } else {
        console.error('No car data found in localStorage or data is invalid.');
    }

    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const startDate = new Date(document.getElementById('startDate').value);
        const endDate = new Date(document.getElementById('endDate').value);
        const today = new Date();
        console.log('Start Date:', startDate);
        console.log('End Date:', endDate);

        if (startDate < today) {
            alert('Start date cannot be in the past.');
            return;
        }
        if (endDate <= startDate) {
            alert('End date must be after the start date.');
            return;
        }
        const days = (endDate - startDate) / (1000 * 60 * 60 * 24);
        console.log('Rental Days:', days);

        const pricePerDay = parseFloat(selectedCar.pricePerDay) || 0;
        const totalCost = days * pricePerDay;
        console.log('Price Per Day:', pricePerDay);
        console.log('Total Cost:', totalCost);
        totalCostInput.value = `₹${totalCost.toFixed(2)}`;
        confirmationMessage.style.display = 'block';
        rentalDetails.innerHTML = `
            Car Model: ${selectedCar.model}<br>
            Start Date: ${startDate.toDateString()}<br>
            End Date: ${endDate.toDateString()}<br>
            Total Cost: ₹${totalCost.toFixed(2)}
        `;
    });
});
