<<<<<<< HEAD
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const routeMap = {
        '/index': 'index.html',
        '/about': 'about.html',
        '/contact': 'contact.html'
    };

    const filePath = routeMap[req.url];

    if (filePath) {
        const fullPath = path.join(__dirname, filePath);
        fs.readFile(fullPath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('<h1>Error 500: Error interno del servidor</h1>');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Error 404: Página no encontrada</h1>');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor web escuchando en el puerto ${PORT}`);
});
=======
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
>>>>>>> f895ea9c772be56f02758dbf1a15740c146a41c7
