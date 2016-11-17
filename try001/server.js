var app = require('express')();//Socket Package
var http = require('http').Server(app);//Socket Package
var io = require('socket.io')(http);//Socket Package

app.get('/', function(req, res){//serves the html page
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){//take in and send out the messages to all the users
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){//This actually tells the server where to host the page
  console.log('listening on *:3000');
});
