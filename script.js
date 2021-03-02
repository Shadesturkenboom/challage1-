
var brandstof = document.getElementById('line').getContext('2d');

var myLineChart = new Chart(brandstof, {
    type: 'line',
     data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});


var eten = document.getElementById('bar').getContext('2d');

var myBarChart = new Chart(eten, {
    type: 'bar',
 data: {
 	labels:['vega', 'vlees', 'vis', 'vogel'],
    datasets: [{
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        data: [20, 30, 40, 50, 0],
        backgroundColor: 'red',
        borderColor: 'red',
        borderWidth: '10'
    }]
},
    options: {}
});


var aantallen = document.getElementById('donut').getContext('2d');

var myDoughnutChart = new Chart(aantallen, {
    type: 'doughnut',
    data: {
    	labels: [ 'Red','Yellow','Blue' ],
	    datasets: [{
	        data: [10, 20, 30],
	        backgroundColor: ['red', 'green', 'yellow']
	   
	    }],	 
},
    options: {}
});







