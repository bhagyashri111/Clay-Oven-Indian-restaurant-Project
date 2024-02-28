// Function to handle reservation form submission
function handleReservationFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form data
    const name = document.getElementById('reservationName').value.trim();
    const email = document.getElementById('reservationEmail').value.trim();
    const date = document.getElementById('reservationDate').value;
    const time = document.getElementById('reservationTime').value;
    const guests = parseInt(document.getElementById('reservationGuests').value);

    // Validate form data
    if (name === '' || email === '' || date === '' || time === '' || isNaN(guests) || guests < 1) {
        alert('Please fill in all fields correctly.');
        return;
    }

    // Perform reservation process (add your logic here)
    alert('Reservation successful!\nName: ' + name + '\nEmail: ' + email + '\nDate: ' + date + '\nTime: ' + time + '\nGuests: ' + guests);
}

// Event listener for reservation form submission
document.getElementById('reservationForm').addEventListener('submit', handleReservationFormSubmit);