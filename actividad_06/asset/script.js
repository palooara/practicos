// Boton que cambia los estilos de forma cíclica 
const boton = document.createElement("button");
boton.textContent = "change style";
document.body.prepend(boton);


const link = document.getElementById("temaCSS");



const estilos=[
    "./css/estilos.css",
    "./css/estilos-retro.css",
    "./css/estilos-peliculas.css"
    ];
    
let indiceEstilos=parseInt(localStorage.getItem("indiceEstilo")) || 0;
link.href = estilos[indiceEstilos];

function cambiarEstilo(){
    indiceEstilos = (indiceEstilos + 1) % estilos.length;
    link.href = estilos[indiceEstilos];
    console.log("cambio de estilo");
    localStorage.setItem("indiceEstilos", indiceEstilos);
}
// Asignar la función al evento click
boton.addEventListener("click", cambiarEstilo);

