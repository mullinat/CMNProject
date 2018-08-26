var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message1', function(msg){
    io.emit('chat message1', msg);
  });
});
io.on('connection', function(socket){
  socket.on('chat message2', function(msg){
    io.emit('chat message2', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
