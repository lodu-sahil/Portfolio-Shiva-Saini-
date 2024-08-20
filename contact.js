document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission

        alert("Thank you for your message! I'll get back to you soon.");
        
        // Here you can add code to handle the form submission, like sending data to a server.
        
        form.reset(); // Reset the form after submission
    });
});