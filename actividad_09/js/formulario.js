let contactos = [];
function procesarForm (event){
    event.preventDefault(); // Evitar el envío del formulario
    const nombre = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").vale;
    const id = document.getElementById("id").value;

    let contacto = {
        nombre: nombre,
        email: email,
        fechaNacimiento: fechaNacimiento,
        id: id
    };

    contactos.push(contacto); // Agregar el contacto al array
    localStorage.setItem("contactos", JSON.stringify(contactos)); // Guardar el array en el local storage

    console.log(contactos); // Mostrar el contacto guardado en la consola
    document.getElementById("formulario").reset(); // Limpiar el formulario
}

