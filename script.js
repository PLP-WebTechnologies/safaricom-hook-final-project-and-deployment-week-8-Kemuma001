// Simple form validation for contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('All fields are required!');
    } else {
        alert('Form submitted successfully!');
        // You can also handle actual form submission here
    }
});
