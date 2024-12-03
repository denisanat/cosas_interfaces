const NUMERO_TABLAS = 5;
const NUMERO_ITEMS = 20;
const DESCRIPCIONES = [
    "flex-wrap: nowrap",
    "flex-wrap: wrap",
    "flex-wrap: wrap-reverse",
    "flex-wrap: wrap-reverse, align-items: start"
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
            contenido = `${i}.${j}`
        tabla.innerHTML += `<div class="item">${contenido}</div>`;
    }
    tabla.classList.add("caja");
    document.querySelector("body").appendChild(titulo);
    document.querySelector("body").appendChild(tabla);
}

