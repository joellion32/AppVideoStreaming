const {io} = require('../../server/app');



io.on('connection', (client) => {
console.log('Usuario Conectado');


// desconexion con el servidor
client.on('disconnect', () => {
console.log('Usuario Desconectado');
});


// escuchar evento stream
client.on('stream', (video) => {
client.broadcast.emit('visualizar', video);
});
});



