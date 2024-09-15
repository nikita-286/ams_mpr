// Add event listeners to each action button
document.querySelectorAll('.action-button').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        if (buttonText === 'View Attendance') {
            window.location.href = 'graph.html';
        } else if (buttonText === 'Mark Attendance') {
            window.location.href = 'mark-atten.html';
        }
    });
});

