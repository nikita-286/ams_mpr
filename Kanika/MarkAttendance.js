document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('attendance-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();  // Prevent default form submission
            const attendanceType = document.getElementById('attendance-type').value;
            alert('Attendance type selected: ' + attendanceType);

            // Redirect to teacher4.html after alert
            window.location.href = 'AttendanceDetails.html';
        });
    }
});
