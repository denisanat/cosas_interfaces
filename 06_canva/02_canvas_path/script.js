let canvas = document.getElementById("tutorial");

document.getElementById("boton").addEventListener("click", () => {
	if (canvas.getContext) {
		let ctx = canvas.getContext("2d");

		/*ctx.fillStyle = "rgb(255, 0, 0)";
		ctx.fillRect(100, 100, 200, 200);*/

		ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
		ctx.fillRect(200, 200, 200, 200);

		ctx.beginPath();
		ctx.ellipse(400, 400, 150, 100, 0, 0, Math.PI * 2);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(400, 500);
		ctx.lineTo(450, 550);
		ctx.lineTo(400, 600);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(100, 300);
		ctx.lineTo(100, 200);
		ctx.lineTo(200, 100);
		ctx.lineTo(300, 200);
		ctx.lineTo(300, 300);
		ctx.lineTo(100, 300);
		ctx.moveTo(130, 200);
		ctx.lineTo(180, 200);
		ctx.lineTo(180, 250);
		ctx.lineTo(130, 250);
		ctx.lineTo(130, 200);
		ctx.moveTo(230, 200);
		ctx.lineTo(280, 200);
		ctx.lineTo(280, 250);
		ctx.lineTo(230, 250);
		ctx.lineTo(230, 200);
		ctx.stroke();
	}
});
