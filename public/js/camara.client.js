$(document).ready(function () {
    /*-------------------------INICIAR VIDEO CAMARA-----------------------------*/
    
    navigator.getMedia = ( navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia);
    
        if(navigator.getMedia){
            navigator.getUserMedia({video: true}, loadCamera, failCamera)
        }
        
        setInterval(function(){
            viewVideo(video, context);
        }, 70);
    
     /*-------------------------PREPARAR SOCKETS-----------------------------*/
    var socket = io();


    socket.on('connect', function(){
    console.log('Conexion con el servidor correctamente');
    });
    
    socket.on('disconnect', function(){
    console.log('Conexion con el servidor a fallado');
    });
    
    
    /*-------------------------configuracion de la video camara-----------------------------*/
    
    // varibles
    var canvas = document.querySelector("#preview");
    var video = document.querySelector("#video");
    var context = canvas.getContext("2d");
    

    // configuraciones
    canvas.width = 800;
    canvas.height = 600;

    context.width = canvas.width;
    context.height = canvas.height;
    
    function loadCamera(stream) { 
        console.log('camara cargada correctamente');
        video.srcObject = stream;
    }

    function failCamera() {  
        alert('hay un error en la camara');
    }
   

    // cargar video y dibujar canvas
    function viewVideo(video, context){
        context.drawImage(video, 0, 0, context.width, context.height);
        socket.emit('stream', canvas.toDataURL('image/webp'));
    }
    
    
});