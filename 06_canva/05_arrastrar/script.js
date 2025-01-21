const ctx = document.getElementById("tutorial").getContext("2d");

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

let ratonDownX, ratonDownY, ratonUpX, ratonUpY;

document.getElementById("tutorial").addEventListener("mousedown", (event) => {
	ratonDownX = event.pageX - 107;
	ratonDownY = event.pageY - 30;

	figuras.forEach((fig) => {
		if (
			ratonDownX > fig.posX &&
			ratonDownX < fig.posX + fig.lenX &&
			ratonDownY > fig.posY &&
			ratonDownY < fig.posY + fig.lenY
		) {
			fig.moviendo = true;
			fig.desRatonX = ratonDownX - fig.posX;
			fig.desRatonY = ratonDownY - fig.posY;
		}
	});
});

document.getElementById("tutorial").addEventListener("mousemove", (event) => {
	ratonDownX = event.pageX - 107;
	ratonDownY = event.pageY - 30;

	figuras.forEach((fig) => {
		if (fig.moviendo) {
			fig.posX = ratonDownX - fig.desRatonX;
			fig.posY = ratonDownY - fig.desRatonY;
		}
	});
});

document.getElementById("tutorial").addEventListener("mouseup", (event) => {
	ratonUpX = event.pageX - 107;
	ratonUpY = event.pageY - 30;

	figuras.forEach((fig) => {
		fig.moviendo = false;
		fig.posX += ratonUpX - ratonDownX;
		fig.posY += ratonUpY - ratonDownY;
	});
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
