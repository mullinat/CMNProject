var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/Script.js', function(req, res) {
    res.sendFile(__dirname + '/Script.js');
});
app.get('/Style.css', function(req, res) {
    res.sendFile(__dirname + '/Style.css');
});

io.on('connection', function(socket) {
    socket.on('LiveChat', function(msg) {
        io.emit('LiveChat', msg);
    });

    socket.on('QandAChat', function(msg) {
        io.emit('QandAChat', msg);
    });
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});
