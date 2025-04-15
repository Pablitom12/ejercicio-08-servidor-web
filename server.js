const http = require("http");

// Creamos el servidor

const server = http.createServer((request, response)=>{

})


// Port del servidor
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`)
})