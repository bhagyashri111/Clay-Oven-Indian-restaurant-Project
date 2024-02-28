// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the contact form element
    const contactForm = document.getElementById('contactForm');

    // Add an event listener for the form submission
    contactForm.addEventListener('submit', function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the form data
        const formData = new FormData(contactForm);

        // Convert the form data to JSON format
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        // Check if the name field is empty
        if (!jsonData['name']) {
            alert('Please enter your name.');
        }
        // Check if the email field is empty and if it contains a valid email address
        else if (!jsonData['email']) {
            alert('Please enter your email address.');
        } else if (!isValidEmail(jsonData['email'])) {
            alert('Please enter a valid email address.');
        }
        // Check if the subject field is empty
        else if (!jsonData['subject']) {
            alert('Please enter a subject for your message.');
        }
        // Check if the message field is empty
        else if (!jsonData['message']) {
            alert('Please enter your message.');
        }
        // If all fields are filled, proceed with form submission
        else {
            // Here you can perform further actions with the form data
            // For example, you can send it to a server using fetch or XMLHttpRequest

            // Log the form data to the console (for demonstration purposes)
            console.log('Form Data:', jsonData);

            // Optionally, you can reset the form after submission
            contactForm.reset();

            // Display a confirmation message to the user
            alert('Your message has been submitted. We will get back to you soon!');
        }
    });
});

// Function to validate email address format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '') {
        alert('Please enter your name.');
        return false;
    }

    if (email.trim() === '') {
        alert('Please enter your email.');
        return false;
    }

    if (subject.trim() === '') {
        alert('Please enter the subject.');
        return false;
    }

    if (message.trim() === '') {
        alert('Please enter your message.');
        return false;
    }

    return true;
}