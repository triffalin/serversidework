// 1. Execution nodejs code
// to open this file in nodejs, typed "node app,js" in the terminal
const userName = 'Alin';
console.log(userName);

// 2. Creating a Custom nodejs server
const http = require('http');

const server = http.createServer();

server.listen(3000);
