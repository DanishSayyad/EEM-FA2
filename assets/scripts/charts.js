// Chart defaults
Chart.defaults.font.size = 7;
Chart.defaults.font.family = 'Roboto';
Chart.defaults.color = '#333';

// CPU Market Share
new Chart(document.getElementById('cpuChart').getContext('2d'), {
    type: 'doughnut',
    data: {
        labels: ['AMD', 'Intel'],
        datasets: [{
            data: [30.4, 69.6],
            backgroundColor: ['#ED1C24', '#00BCD4'],
            borderWidth: 2,
            borderColor: '#fff'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: { font: { size: 6 }, padding: 4, boxWidth: 8 }
            },
            tooltip: {
                callbacks: {
                    label: (ctx) => ctx.label + ': ' + ctx.parsed + '%'
                }
            }
        }
    }
});

// GPU Market Share
new Chart(document.getElementById('gpuChart').getContext('2d'), {
    type: 'doughnut',
    data: {
        labels: ['AMD', 'NVIDIA'],
        datasets: [{
            data: [19, 81],
            backgroundColor: ['#ED1C24', '#76b900'],
            borderWidth: 2,
            borderColor: '#fff'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: { font: { size: 6 }, padding: 4, boxWidth: 8 }
            },
            tooltip: {
                callbacks: {
                    label: (ctx) => ctx.label + ': ' + ctx.parsed + '%'
                }
            }
        }
    }
});

// Server CPU Market Share
new Chart(document.getElementById('serverChart').getContext('2d'), {
    type: 'doughnut',
    data: {
        labels: ['AMD EPYC', 'Intel Xeon'],
        datasets: [{
            data: [23.6, 76.4],
            backgroundColor: ['#ED1C24', '#00BCD4'],
            borderWidth: 2,
            borderColor: '#fff'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: { font: { size: 6 }, padding: 4, boxWidth: 8 }
            },
            tooltip: {
                callbacks: {
                    label: (ctx) => ctx.label + ': ' + ctx.parsed + '%'
                }
            }
        }
    }
});

// Revenue Chart
new Chart(document.getElementById('revenueChart').getContext('2d'), {
    type: 'bar',
    data: {
        labels: ['2019', '2020', '2021', '2022', '2023', '2024E'],
        datasets: [{
            label: 'Revenue',
            data: [6.73, 9.76, 16.43, 23.60, 22.68, 25.8],
            backgroundColor: ['#ED1C24', '#e63946', '#f77f00', '#fcbf49', '#06d6a0', '#118ab2'],
            borderRadius: 3,
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (ctx) => ctx.dataset.label + ': ' + ctx.parsed.y + 'B'
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    font: { size: 7 },
                    callback: (val) => val + 'B'
                },
                grid: { color: 'rgba(0,0,0,0.05)' }
            },
            x: {
                ticks: { font: { size: 7 } },
                grid: { display: false }
            }
        }
    }
});

// Competitive Analysis Chart
new Chart(document.getElementById('compChart').getContext('2d'), {
    type: 'radar',
    data: {
        labels: ['Performance', 'Efficiency', 'Value', 'Innovation', 'Ecosystem'],
        datasets: [
            {
                label: 'AMD',
                data: [90, 95, 95, 90, 80],
                backgroundColor: 'rgba(237, 28, 36, 0.2)',
                borderColor: '#ED1C24',
                borderWidth: 2,
                pointBackgroundColor: '#ED1C24'
            },
            {
                label: 'Competition',
                data: [85, 75, 70, 85, 95],
                backgroundColor: 'rgba(0, 188, 212, 0.2)',
                borderColor: '#00BCD4',
                borderWidth: 2,
                pointBackgroundColor: '#00BCD4'
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            r: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    font: { size: 6 },
                    stepSize: 25
                },
                pointLabels: {
                    font: { size: 7 }
                }
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: { font: { size: 7 }, padding: 4, boxWidth: 10 }
            }
        }
    }
});

// Segment Revenue Chart
new Chart(document.getElementById('segmentChart').getContext('2d'), {
    type: 'doughnut',
    data: {
        labels: ['Data Center', 'Client', 'Gaming', 'Embedded'],
        datasets: [{
            data: [42, 28, 19, 11],
            backgroundColor: ['#ED1C24', '#00BCD4', '#4CAF50', '#FFC107'],
            borderWidth: 2,
            borderColor: '#fff'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: 'right',
                labels: { font: { size: 9 }, padding: 6, boxWidth: 12 }
            },
            tooltip: {
                callbacks: {
                    label: (ctx) => ctx.label + ': ' + ctx.parsed + '%'
                }
            }
        }
    }
});

// Growth Trends Chart
new Chart(document.getElementById('growthChart').getContext('2d'), {
    type: 'line',
    data: {
        labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024'],
        datasets: [
            {
                label: 'Data Center',
                data: [1.3, 1.5, 1.6, 2.3, 2.8, 3.2],
                borderColor: '#ED1C24',
                backgroundColor: 'rgba(237, 28, 36, 0.1)',
                tension: 0.4,
                fill: true,
                borderWidth: 2
            },
            {
                label: 'Client',
                data: [0.7, 0.9, 1.0, 1.4, 1.5, 1.6],
                borderColor: '#00BCD4',
                backgroundColor: 'rgba(0, 188, 212, 0.1)',
                tension: 0.4,
                fill: true,
                borderWidth: 2
            },
            {
                label: 'Gaming',
                data: [0.9, 0.8, 0.9, 1.4, 1.3, 1.5],
                borderColor: '#4CAF50',
                backgroundColor: 'rgba(76, 175, 80, 0.1)',
                tension: 0.4,
                fill: true,
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        interaction: {
            intersect: false,
            mode: 'index'
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: { font: { size: 7 }, padding: 4, boxWidth: 10 }
            },
            tooltip: {
                callbacks: {
                    label: (ctx) => ctx.dataset.label + ': ' + ctx.parsed.y + 'B'
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    font: { size: 7 },
                    callback: (val) => val + 'B'
                },
                grid: { color: 'rgba(0,0,0,0.05)' }
            },
            x: {
                ticks: { font: { size: 6 } },
                grid: { display: false }
            }
        }
    }
});