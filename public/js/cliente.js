$(document).ready(function () {
    var socket = io();


    socket.on('connect', function () {
        console.log('Conexion con el servidor correctamente');
    });

    socket.on('disconnect', function () {
        console.log('Conexion con el servidor a fallado');
    });

// escuchar el evento visualizar
socket.on('visualizar', function(data) {
var imagen = document.querySelector("#pantalla");
imagen.src = data;
});


  
    
});