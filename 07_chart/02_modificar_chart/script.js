const canvas = document.getElementById("canvas");
const TIPOS = ["bar", "line", "bubble", "polarArea", "radar", "scatter"];
let numTipo = 3;

const grafico = new Chart(canvas, {
	type: TIPOS[numTipo],
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

document.getElementById("insert_button").addEventListener("click", () => {
	grafico.data.labels.push("Pink");
	grafico.data.datasets[0].data.push(5);
	grafico.data.datasets[0].data[0] = 10;
	grafico.update();
});

function getTipo() {}

document.getElementById("next_tipo").addEventListener("click", () => {
	if (++numTipo >= TIPOS.length) numTipo = 0;
	grafico.type = TIPOS.at(numTipo);
	grafico.update();
});

document.getElementById("prev_tipo").addEventListener("click", () => {
	if (--numTipo < 0) numTipo = TIPOS.length - 1;
	grafico.type = TIPOS.at(numTipo);
	grafico.update();
});
