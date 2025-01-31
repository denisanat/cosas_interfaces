const contenedor_botones = document.querySelector(".cont_button");

const funcionalidades = [
	"none",
	"translate(100px, 0px)",
	"translate(-100px, 0px)",
	"translate(0px, 100px)",
	"rotateX(45deg)",
	"rotateY(45deg)",
	"rotateZ(45deg)",
	"scale(2)",
	"scale(1, 2)",
	"skew(60deg)",
	"skew(60deg, 60deg)",
];

const caja = document.getElementById("caja");

let boton;

funcionalidades.forEach((el) => {
	boton = document.createElement("button");

	boton.innerHTML = el;
	contenedor_botones.append(boton);
	boton.addEventListener("click", () => {
		caja.style.transform = el;
	});
});
