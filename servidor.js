const http = require('http');

const hostname = '127.0.0.1';
const port = 8888;

const servidor = http.creareServer((req, respuesta) => {

respuesta.statusCode = 200;
respuesta.setHEader('Content-Type','text/plain');
respuesta.end('Hello Servidor\n');
});

servidor.listen(port, hostname, () => {

	console.log('El servidor se esta ejecutando en http://${hostname}:${port}/');
});