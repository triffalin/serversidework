// 1. Execution nodejs code
// to open this file in nodejs, typed "node app,js" in the terminal
// const userName = 'Alin';
// console.log(userName);

// 2. Creating a Custom nodejs server
const http = require('http');
// - handling request and creating custom response
function handleRequest(request, response) {
	response.statusCode = 200;
	response.end('<h1>Hello World!</h1>');
}

const server = http.createServer(handleRequest);

server.listen(3000);
