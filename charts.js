const InfernapeCTX = document.getElementById('InfernapeChart');

new Chart(InfernapeCTX, {
  type: 'bar',
  data: {
    labels: ['HP','Attack','Defence','Special Attack','Special Defence','Speed'],
    datasets: [{
      label: 'Infernape',
      data: [76,104,71,104,71,108],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)',
        'rgb(0,0,0)'
      ],
      borderWidth: 5,
    },
    {
        label: "Arceus",
        data: [120,120,120,120,120,120],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)',
            'rgb(0,0,0)'
          ],
        borderWidth: 5
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins:{
        legend:{
            display:false
        },
        subtitle:{
            display:false
        }
    }
  }
});
Chart.defaults.color = '#000';