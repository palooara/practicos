// trabajamos con ES5 ==> JS nativo
const http = require("http");

// Creamos el servidor
const server = http.createServer((request, response)=>{
    console.log("=======================");
    console.log(request);
    console.log("=======================");
    console.info("todo joya");
    console.log("=======================");
    console.log(request.url);
    console.log("=======================");
    //creamos rutas para el usuario
    switch(request.url){
        case "/contactos":
            console.log("recibimos un contacto");
            
            break;
    }
    response.end(" "); 
});

//PUERTO DEL SERVIDOR
const PORT = 5500;

// Activamos el servidor para que escuche las peticiones
server.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto http://localhost:5500 ' + PORT);
});