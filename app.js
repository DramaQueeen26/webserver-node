const http = require('http');

http.createServer((req, res) => {

	res.write('Hola mundo');
	res.end();
})
.listen(8080);

console.log('Escuchando al puerto:', 8080)