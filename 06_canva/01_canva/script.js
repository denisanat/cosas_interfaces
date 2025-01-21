let canvas = document.getElementById("tutorial");

document.getElementById("boton").addEventListener("click", () => {
	if (canvas.getContext) {
		let ctx = canvas.getContext("2d");

		ctx.fillStyle = "rgb(255, 0, 0)";
		ctx.fillRect(100, 100, 200, 200);

		ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
		ctx.fillRect(200, 200, 200, 200);
	}
});
