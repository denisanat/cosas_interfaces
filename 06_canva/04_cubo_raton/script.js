let ctx = document.getElementById("tutorial").getContext("2d");
let posX = 0,
	posY = 100;

let puntos = 0;

const DIAMETRO = 50;

let velX = 10,
	velY = 5;

const COLORES = ["rgb(255, 0, 0)", "rgb(0, 0, 255)", "rgb(0, 255, 0)"];

let color = COLORES.at(1),
	color2 = COLORES.at(1);

let posRatonX, posRatonY;

document.getElementById("tutorial").addEventListener("mousemove", (event) => {
	posRatonX = event.pageX;
	posRatonY = event.pageY;
});

window.setInterval(() => {
	color = COLORES.at(Math.random() * 3);
	color2 = COLORES.at(Math.random() * 3);
	console.log("Hola");
}, 1000);

window.setInterval(() => {
	puntos -= 1;
}, 10000);

function dibujar() {
	ctx.clearRect(0, 0, 1700, 800);

	if (posX + DIAMETRO >= 1700) velX = -Math.abs(velX);
	else if (posX <= 0) velX = Math.abs(velX);

	if (posY + DIAMETRO >= 600) velY = -Math.abs(velY);
	else if (posY <= 0) velY = Math.abs(velY);

	posX += velX;
	posY += velY;

	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(posX, posY, DIAMETRO, 0, 2 * Math.PI);
	ctx.fill();

	// ======= RATON =====

	ctx.fillStyle = color2;
	ctx.beginPath();
	ctx.arc(posRatonX - 100, posRatonY, DIAMETRO, 0, 2 * Math.PI);
	ctx.fill();

	if (distancia(posX, posY, posRatonX - 100, posRatonY) < 20) {
		if (color === color2) puntos++;
		else puntos--;
	}

	window.requestAnimationFrame(dibujar);
}

function distancia(x1, y1, x2, y2) {
	return Math.sqrt(Math.pow(x2 - x1) + Math.pow(y2 - y1));
}

window.requestAnimationFrame(dibujar);

document.getElementById("b_arr").addEventListener("click", () => {
	velY -= 2;
});

document.getElementById("b_aba").addEventListener("click", () => {
	velY += 2;
});

document.getElementById("b_izq").addEventListener("click", () => {
	velX -= 2;
});

document.getElementById("b_der").addEventListener("click", () => {
	velX += 2;
});
