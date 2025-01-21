const ctx = document.getElementById("tutorial").getContext("2d");

let figuraMovida;

const figuras = [
	{
		posX: 600,
		posY: 10,
		lenX: 55,
		lenY: 100,
		color: "rgb(255, 0, 0)",
		moviendo: false,
		desRatonX: 0,
		desRatonY: 0,
	},
	{
		posX: 100,
		posY: 600,
		lenX: 100,
		lenY: 100,
		color: "rgb(0, 0, 255)",
		moviendo: false,
		desRatonX: 0,
		desRatonY: 0,
	},
	{
		posX: 10,
		posY: 10,
		lenX: 55,
		lenY: 100,
		color: "rgb(0, 255, 0)",
		moviendo: false,
		desRatonX: 0,
		desRatonY: 0,
	},
	{
		posX: 50,
		posY: 10,
		lenX: 100,
		lenY: 100,
		color: "rgb(0, 200, 200)",
		moviendo: false,
		desRatonX: 0,
		desRatonY: 0,
	},
	{
		posX: 500,
		posY: 10,
		lenX: 100,
		lenY: 100,
		color: "rgb(100, 100, 200)",
		moviendo: false,
		desRatonX: 0,
		desRatonY: 0,
	},
];

const rFiguras = [...figuras].reverse();

let ratonX, ratonY;

document.getElementById("tutorial").addEventListener("mousedown", (event) => {
	ratonX = event.pageX - 107;
	ratonY = event.pageY - 30;

	figuras.forEach((fig) => {
		if (
			ratonX > fig.posX &&
			ratonX < fig.posX + fig.lenX &&
			ratonY > fig.posY &&
			ratonY < fig.posY + fig.lenY
		) {
			figuraMovida = fig;
			fig.desRatonX = ratonX - fig.posX;
			fig.desRatonY = ratonY - fig.posY;
		}
	});
});

document.getElementById("tutorial").addEventListener("mousemove", (event) => {
	ratonX = event.pageX - 107;
	ratonY = event.pageY - 30;

	if (figuraMovida != null) {
		figuraMovida.posX = ratonX - figuraMovida.desRatonX;
		figuraMovida.posY = ratonY - figuraMovida.desRatonY;
	}
});

document.getElementById("tutorial").addEventListener("mouseup", () => {
	figuraMovida = null;
});

function dibujar() {
	ctx.clearRect(0, 0, 1700, 800);

	figuras.forEach((fig) => {
		ctx.fillStyle = fig.color;
		ctx.fillRect(fig.posX, fig.posY, fig.lenX, fig.lenY);
	});

	window.requestAnimationFrame(dibujar);
}

window.requestAnimationFrame(dibujar);
