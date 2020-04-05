const express = require('express');
const path = require('path');
const http = require('http');
const SocketIO  = require('socket.io');
const routes = require('./routes/webroutes');

// variables
const app = express()
const port = process.env.PORT || 3000;
const server = http.createServer(app);


// exportar sockets
module.exports.io = SocketIO(server);


// importar sockets
require('../server/sockets/socket.io');


// rutas
app.use(routes);


//archivos estaticos
app.use(express.static(path.resolve(__dirname, '../public')));

server.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));