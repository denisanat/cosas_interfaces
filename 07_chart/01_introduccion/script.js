const canvas = document.getElementById("canvas");

new Chart(canvas, {
	type: "bar",
	data: {
		labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		datasets: [
			{
				label: "# of Votes",
				data: [12, 19, 3, 15, 2, 3],
				borderWidth: 0,
			},
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
});
