// Bar graph data and configuration
const ctx = document.getElementById('attendanceChart').getContext('2d');

// Attendance data and corresponding colors
const attendanceData = [80, 49, 100, 50, 20];
const backgroundColors = attendanceData.map((value) => {
    if (value > 75) {
        return '#3cb371'; // Green for attendance above 75%
    } else if (value >= 50) {
        return '#ffc81c'; // Yellow for attendance between 50% and 75%
    } else {
        return '#ff3b1c'; // Red for attendance below 50%
    }
});

const borderColors = attendanceData.map((value) => {
    if (value > 75) {
        return '#00563B'; // Green border for attendance above 75%
    } else if (value >= 50) {
        return '#FEBE10'; // Yellow border for attendance between 50% and 75%
    } else {
        return '#9e1b32'; // Red border for attendance below 50%
    }
});

const attendanceChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['IP', 'CNS', 'SE', 'ADSA', 'EEB'], // X-axis labels
        datasets: [{
            label: 'Attendance Percentage',
            data: attendanceData, // Y-axis data
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1,
            barPercentage: 0.5,       // Adjust bar width (smaller value = narrower bars)
            categoryPercentage: 0.6,  // Space allocated to each category
            maxBarThickness: 87       // Maximum width of bars in pixels
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Attendance (%)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Subjects'
                }
            }
        },
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function(tooltipItem) {
                        return `Attendance: ${tooltipItem.raw}%`;
                    }
                }
            }
        }
    }
});
