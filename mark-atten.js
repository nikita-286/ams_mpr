// mark-atten.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('attendance-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Attendance type selected.');
            // Add AJAX or other form submission logic here if needed.
        });
    }
});
