var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'cmn',
    password: '3.141IdoNotLikePie',
    database: 'CMNProject'
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/Script.js', function(req, res) {
    res.sendFile(__dirname + '/Script.js');
});
app.get('/Style.css', function(req, res) {
    res.sendFile(__dirname + '/Style.css');
});
app.get('/RandomNames.json', function(req, res) {
    res.sendFile(__dirname + '/RandomNames.json');
});
app.get('/Requirements/bootstrap.min.css.json', function(req, res) {
    res.sendFile(__dirname + '/Requirements/bootstrap.min.css.json');
});
app.get('/Requirements/jquery-1.11.1.js', function(req, res) {
    res.sendFile(__dirname + '/Requirements/jquery-1.11.1.js');
});
app.get('/Requirements/socket.io-1.2.0.js', function(req, res) {
    res.sendFile(__dirname + '/Requirements/socket.io-1.2.0.js');
});




io.on('connection', function(socket) {
    socket.on('LiveChat', function(msg) {
        io.emit('LiveChat', msg);
        connection.query('insert into LiveChat (person, comment) values ("Unknown", "' + msg + '");', function(err, rows, fields) {
            if (!err)
                console.log('The solution is: ', rows);
            else
                console.log('Error while performing Query.');
        });
    });

    socket.on('QandAChat', function(msg) {
        io.emit('QandAChat', msg);
        connection.query('insert into LiveChat (person, comment) values ("Unknown", "' + msg + '");', function(err, rows, fields) {
            if (!err)
                console.log('The solution is: ', rows);
            else
                console.log('Error while performing Query.');
        });
    });
});






http.listen(3000, function() {
    console.log('listening on *:3000');
});
