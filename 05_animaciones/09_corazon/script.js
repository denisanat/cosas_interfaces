let iteracion = 0;
let animacion = 0;

let corazon = document.getElementById("corazon");

let estilo = getComputedStyle(corazon);

console.log(estilo.animationName);
let animaciones = ["lupdub", "do_a_barrel_roll"];

document.addEventListener("animationiteration", (event) => {
	iteracion++;

	if (iteracion == 2) {
		if (animacion == 0) {
			animacion = 1;
		} else {
			animacion = 0;
		}

		corazon.style.animation = `2s ${animaciones[animacion]} infinite`;
		iteracion = 0;
	}
});
