let expansion = [
	{ width: "20em" },
	{ width: "30em", offset: 0.1 },
	{ width: "40em", background: "blue", offset: 0.95 },
	{ width: "40em", background: "red" },
];

let duracion = {
	duration: 8000,
	iterations: Infinity,
};

let principal = document.getElementById("principal");
principal.animate(expansion, duracion);
