// view-attendance.js

document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('attendanceChart').getContext('2d');

    const attendanceData = {
        labels: ['John Doe', 'Jane Smith', 'Michael Brown'], // Student names
        datasets: [
            {
                label: 'IP',
                data: [85, 80, 90], // Attendance for IP subject
                backgroundColor: '#3cb371',
                borderColor: '#00563B',
                borderWidth: 1
            },
            {
                label: 'CNS',
                data: [75, 85, 80], // Attendance for CNS subject
                backgroundColor: '#ffc81c',
                borderColor: '#FEBE10',
                borderWidth: 1
            },
            {
                label: 'SE',
                data: [90, 88, 85], // Attendance for SE subject
                backgroundColor: '#ff3b1c',
                borderColor: '#9e1b32',
                borderWidth: 1
            },
            {
                label: 'ADSA',
                data: [80, 70, 90], // Attendance for ADSA subject
                backgroundColor: '#3cb371',
                borderColor: '#00563B',
                borderWidth: 1
            },
            {
                label: 'EEB',
                data: [70, 75, 80], // Attendance for EEB subject
                backgroundColor: '#ffc81c',
                borderColor: '#FEBE10',
                borderWidth: 1
            }
        ]
    };

    const attendanceChart = new Chart(ctx, {
        type: 'bar',
        data: attendanceData,
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
                        text: 'Students'
                    }
                }
            },
            responsive: true,
            plugins: {
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function(tooltipItem) {
                            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}%`;
                        }
                    }
                }
            }
        }
    });
});
