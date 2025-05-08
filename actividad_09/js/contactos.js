//cargarcontactos productos desde el local storage
const cargarContactos = () => {
    let contactos = JSON.parse(localStorage.getItem("contactos"))||[];
    console.log(contactos); // Mostrar el array de contactos en la consola
    let tabla = document.getElementById("tablaContactos");
    tabla.innerHTML = ""; // Limpiar la tabla antes de cargar los contactos

}

document.addEventListener("DOMContentLoaded",cargarContactos())