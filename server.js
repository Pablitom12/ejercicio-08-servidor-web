// const http = require("http");

// // Creamos el servidor

// const server = http.createServer((request, response)=>{

// })


// // Port del servidor
// const PORT = 3000;

// server.listen(PORT, () => {
//     console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`)
// })



const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

//  Función para servir un archivo HTML
function serveHTML(res, fileName) {
  const filePath = path.join(__dirname, fileName);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Error 500: archivo no encontrado o lectura fallida
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1>Error 500: Error interno del servidor</h1>');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
}

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/index':
      serveHTML(res, 'index.html');
      break;
    case '/about':
      serveHTML(res, 'about.html');
      break;
    case '/contact':
      serveHTML(res, 'contact.html');
      break;
    default:
      // Error 404: ruta no encontrada
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>Error 404: Página no encontrada</h1>');
  }
});

// Iniciar el servidor
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
