const NUMERO_TABLAS = 6;
const NUMERO_ITEMS = 8;
const DESCRIPCIONES = [
   "justify-content: start",
   "justify-content: end",
   "justify-content: center",
   "justify-content: space-between",
   "justify-content: space-around",
   "justify-content: space-evenly", 
]
const contenidoCeldas = [
];

DESCRIPCIONES.reverse();
for (let i = 1; i <= NUMERO_TABLAS; i++) {
    let titulo = document.createElement("p")
    titulo.innerHTML = DESCRIPCIONES.pop();
    let tabla = document.createElement("div");
    for (let j = 1; j <= NUMERO_ITEMS; j++) {
        let contenido = "";
        if (contenidoCeldas.filter(celda => celda.tabla === i && celda.celda === j).length === 1)
            contenido = contenidoCeldas[j].contenido;
        else
            contenido = i + j/10;
        tabla.innerHTML += `<div class="item">${contenido}</div>`;
    }
    tabla.classList.add("caja");
    document.querySelector("body").appendChild(titulo);
    document.querySelector("body").appendChild(tabla);
}

