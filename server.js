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