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
let animacion_principal = principal.animate(expansion, duracion);

document.getElementById("pausar").addEventListener("click", () => {
	animacion_principal.pause();
});

document.getElementById("continuar").addEventListener("click", () => {
	animacion_principal.play();
});

document.getElementById("finalizar").addEventListener("click", () => {
	animacion_principal.cancel();
});

document.getElementById("reiniciar").addEventListener("click", () => {
	animacion_principal.reverse();
});

/* 
let duracion_base = animacion_principal.playbackRate;
const texto_rango = document.getElementById("texto_rango");

document.getElementById("rango").addEventListener("input", (event) => {
	animacion_principal.updatePlaybackRate(
		duracion_base * (event.target.value / 100)
	);
	texto_rango.innerHTML = event.target.value + "%";
});
*/

document.getElementById("rango").addEventListener("input", (event) => {
	animacion_principal.currentTime =
		(event.target.value / 100) * duracion.duration;
});

document.getElementById("frenar").addEventListener("click", () => {
	animacion_principal.updatePlaybackRate(
		animacion_principal.playbackRate / 2
	);
});

/* METODOS ANIMACIONES
	.pause
	.play
	.reverse
	.cancel
*/
