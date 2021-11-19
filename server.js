var express = require("express");
var app = express();

var server = app.listen(8080);

var io = require("socket.io")(server);

// -------------------------------

app.use(express.static(__dirname +"/static"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// --------------------------------

io.on("connection", function(socket){
    console.log("Someone just connected");

    socket.on("green", function() {
        console.log("Green selected");
        io.sockets.emit('be_green');
    });
    
    socket.on("blue", function() {
        console.log("Blue selected");
        io.sockets.emit('be_blue');
    });

    socket.on("pink", function() {
        console.log("Pink selected");
        io.sockets.emit('be_pink');
    });
});

// -----------------------------------
app.get("/", function(request, response){
    console.log("Home loaded");
    response.render("index");
});