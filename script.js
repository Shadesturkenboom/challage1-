
Chart.defaults.global.defaultFontColor = '#ffffff'

var brandstof = document.getElementById('line').getContext('2d');

var myLineChart = new Chart(brandstof, {
    type: 'line',
     data: {
        labels: ['Dag 1', 'Dag 4', 'Dag 8 ', 'Dag 12', 'Dag 16', 'Dag 20', 'Dag 24'],
        datasets: [{
            label: 'Brandstof in KG',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderColor: 'rgb(255, 99, 132)',
            data: [86000000, 71700000, 57400000, 43100000, 28800000, 14500000, 200000]
        }]
    },

    // Configuration options go here
    options: {}
});


var eten = document.getElementById('bar').getContext('2d');

var myBarChart = new Chart(eten, {
    type: 'bar',
 data: {
 	labels:['vegetarisch', 'vlees', 'veganistisch', 'vis'],
    datasets: [{
        label: 'Aantal',
        data: [718 , 1010, 318, 942, 0],
        backgroundColor: ['#FFA500', '#FF4040', '#7171C6', '#00BFFF'],
        borderWidth: '10'
    }]
},
    options: {
        legend: {
            display: false
        }
    }
});


var aantallen = document.getElementById('donut').getContext('2d');

var myDoughnutChart = new Chart(aantallen, {
    type: 'doughnut',
    data: {
    	labels: [ 'Leeftijd 0-15','Leeftijd 15-30','Leeftijd 30-45', 'Leeftijd 45-60','Leeftijd 65+'   ],
	    datasets: [{
	        data: [2, 6, 42, 32, 18],
	        backgroundColor: ['#FF83FA', '#388E8E', '#00FFFF', '#FF6347', '#AB82FF']
	   
	    }],	 
},
    options: {}
});







