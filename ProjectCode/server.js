var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/Script.js', function(req, res) {
    res.sendFile(__dirname + '/Script.js');
});

io.on('connection', function(socket) {
    socket.on('chat message1', function(msg) {
        io.emit('chat message1', msg);
    });

    socket.on('chat message2', function(msg) {
        io.emit('chat message2', msg);
    });
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});
