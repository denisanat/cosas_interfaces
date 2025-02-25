const ctx = document.getElementById("tutorial").getContext("2d");

const modoIman = ["Atraer", "Alejar"];

let particulas = [];

document.getElementById("tutorial").addEventListener("mousemove", (event) => {
	/* ratonX = event.pageX - 107; */
	/* ratonY = event.pageY - 30; */
});

window.setInterval(() => {
	particulas.push(
		{
			color: `rgb(${rng(255)}, ${rng(255)}, ${rng(255)})`,
			posX: Math.random() * 1700,
			posY: Math.random() * 800,
			tiempoRestante: 5,
		}
	);
	/* if (particulas.length > 5) {
		particulas.splice(0, 1);
	} */
}, 2000)

function dibujar() {
	ctx.clearRect(0, 0, 1700, 800);

	for(let particula of particulas) {
		ctx.beginPath();
    	ctx.arc(particula.posX, particula.posY, 20, 0, Math.PI * 2, true);
		ctx.fillStyle = particula.color;
		ctx.fill();
	}

	window.requestAnimationFrame(dibujar);
}

window.requestAnimationFrame(dibujar);

function rng(numeroMaximo) {
	return Math.random() * numeroMaximo;
}
