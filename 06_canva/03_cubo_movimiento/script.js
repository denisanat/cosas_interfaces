let ctx = document.getElementById("tutorial").getContext("2d");
let posX = 0,
	posY = 100;

const LADO = 100;

let velX = 10,
	velY = 5;

function dibujar() {
	ctx.clearRect(0, 0, 1700, 800);

	if (posX + LADO >= 1700) velX = -Math.abs(velX);
	else if (posX <= 0) velX = Math.abs(velX);

	if (posY + LADO >= 600) velY = -Math.abs(velY);
	else if (posY <= 0) velY = Math.abs(velY);

	ctx.fillStyle = "rgb(255, 0, 0)";

	posX += velX;
	posY += velY;

	ctx.fillRect(posX, posY, LADO, LADO);

	window.requestAnimationFrame(dibujar);
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
