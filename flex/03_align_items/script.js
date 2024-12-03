const NUMERO_TABLAS = 5;
const NUMERO_ITEMS = 8;
const DESCRIPCIONES = [
    "align-items: start",
    "align-items: end",
    "align-items: center",
    "align-items: baseline",
    "align-items: stretch",
]
const contenidoCeldas = [
    { tabla:5, celda:1 , contenido:"hey" },
    { tabla:5, celda:2 , contenido:"muy" },
    { tabla:5, celda:3 , contenido:"buenas" },
    { tabla:5, celda:4 , contenido:"a" },
    { tabla:5, celda:5 , contenido:"todos" },
    { tabla:5, celda:6 , contenido:"guapisimos" },
    { tabla:5, celda:7 , contenido:"aqui" },
    { tabla:5, celda:8 , contenido:"vegetta" },
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

