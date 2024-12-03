const NUMERO_TABLAS = 5;
const NUMERO_ITEMS = 8;
const DESCRIPCIONES = [
    "flex-direction: row", 
    "flex-direction: row-reverse",
    "flex-direction: row, con muchos items",
    "flex-direction: row, con mucho texto",
    "flex-direction: column", 
]
const contenidoCeldas = [
    { tabla:4, celda:4 , contenido:"supercalifragilítoc1" },
        { tabla:4, celda:1 , contenido:"supercalifraoc2" },
    { tabla:4, celda:3 , contenido:"supercalifragilítoc3" },
        { tabla:9, celda:4 , contenido:"mucho contenido a baspalabras . ohhhh! "},
        { tabla:9, celda:5 , contenido:"contenido hola"},
        { tabla:10, celda:4 , contenido:"mucho contenido supercalifragilisticoespirialidoso apalabras . ohhhh! "},
        { tabla:10, celda:5 , contenido:"contenido"},

        { tabla:11, celda:4 , contenido:"Renglón de varias palabras "},
        { tabla:11, celda:5 , contenido:"Renglón de varias palabras"},

        { tabla:12, celda:4 , contenido:"Renglón de varias palabras"},
        { tabla:12, celda:5 , contenido:"Renglón de contdsfsdfsfsdfsfsenidosfsdfsdfsdfsdfsfsdflroooo"},
        { tabla:12, celda:6 , contenido:"hola nene eres listo , beer"}, 

        { tabla:13, celda:4 , contenido:"Renglón de varias palabras"},
        { tabla:13, celda:5 , contenido:"Renglón de contdsfsdfsfsdfsfsenidosfsdfsdfsdfsdfsfsdflroooo"},
        { tabla:13, celda:6 , contenido:"hola nene eres listo , beer"},
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

