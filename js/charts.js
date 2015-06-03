var chart1_data = [
    {
        value: 75,
        color:"#5856d6",
        highlight: "#FF5A5E",
        label: "Value 1"
    },
    {
        value: 25,
        color: "#f1f1e9",
        highlight: "#5AD3D1",
        label: "Value 2"
    }
]
var chart2_data = [
    {
        value: 250,
        color:"#ff9500",
        highlight: "#FF5A5E",
        label: "Value 1"
    }
]
var chart3_data = [
    {
        value: 90,
        color:"#4cd964",
        highlight: "#FF5A5E",
        label: "Value 1"
    },
    {
        value: 270,
        color: "#f1f1e9",
        highlight: "#5AD3D1",
        label: "Value 2"
    }
]

window.onload = function () {
		var ctx = document.getElementById("pieChart1").getContext("2d");
		window.pieChart1 = new Chart(ctx).Pie(chart1_data);

		var ctx = document.getElementById("pieChart2").getContext("2d");
		window.pieChart2 = new Chart(ctx).Pie(chart2_data);

		var ctx = document.getElementById("pieChart3").getContext("2d");
		window.pieChart3 = new Chart(ctx).Pie(chart3_data);

		var chart = new CanvasJS.Chart("chartContainer",
		{
  
                        animationEnabled: true,  

			data: [
			{        
				toolTipContent: "{y} units",
				type: "splineArea",
				markerSize: 30,
				color: "rgba(54,158,173,.7)",
				dataPoints: [
				{x: 1, y: 5},     
				{x: 2, y: 1},     
				{x: 3, y: 8},     
				{x: 4, y: 2},     
				{x: 5, y: 5},     
				{x: 6, y: 6}   
				]
			}             
			]
		});

chart.render();
}