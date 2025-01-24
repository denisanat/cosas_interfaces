const canvas = document.getElementById("canvas");
let datos;

const grafico = new Chart(canvas, {
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

document.getElementById("agregar_datos").addEventListener("click", () => {
	let mayor, menor;
	let datos_dataset;
	let datasets = [...grafico.data.datasets];
	let mayor_dataset, menor_dataset;

	datasets.forEach((dataset, index) => {
		datos_dataset = [...dataset.data];
		datos_dataset = datos_dataset.sort((a, b) => a - b);

		mayor_dataset = datos_dataset.at(datos_dataset.length - 1);
		menor_dataset = datos_dataset.at(0);

		if (index == 0) {
			mayor = mayor_dataset;
			menor = menor_dataset;
		} else {
			if (mayor < mayor_dataset) mayor = mayor_dataset;
			if (menor < menor_dataset) menor = menor_dataset;
		}
	});

	let lista = Array(6);

	for (let i = 0; i < lista.length; i++) {
		lista[i] = Math.floor(Math.random() * (mayor - menor)) - menor;
	}

	console.log(lista);

	grafico.data.datasets.push({
		label: "# of Votes",
		data: lista,
		borderWidth: 0,
	});

	grafico.update();
});
