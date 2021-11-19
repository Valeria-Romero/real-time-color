console.log("Connection!");

let socket = io( 'http://localhost:8080');

$('.green').on('click', function(){
    socket.emit("green");
});

$('.blue').on('click', function(){
    socket.emit("blue");
});

$('.pink').on('click', function(){
    socket.emit("pink");
});

socket.on("be_green", function(){
    $("body").css("background-color", "green");
});

socket.on("be_blue", function(){
    $("body").css("background-color", "blue");
});

socket.on("be_pink", function(){
    $("body").css("background-color", "pink");
});