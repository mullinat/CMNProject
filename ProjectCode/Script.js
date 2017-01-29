var person = prompt("Please enter your name", "Harry Potter");
var socket = io();

function LiveChat() {
    var message = document.getElementById("LiveChatInput").value;
    if (message == "") {
        return false;
    }
    socket.emit('LiveChat', person + " : " + message);
    $('#LiveChatInput').val('');
    return false;
}
socket.on('LiveChat', function(msg) {
    $('#messages').prepend($('<li>').text(msg)); //This actually adds stuff to the form
});
$('form').submit(function() {
    return false;
});

function QandAChat() {
    var message = document.getElementById("QandAChatInput").value;
    if (message == "") {
        return false;
    }
    socket.emit('QandAChat', person + " : " + message);
    $('#QandAChatInput').val('');
    return false;
}
socket.on('QandAChat', function(msg) {
    console.log('chat message 2');
    $('#comments').prepend($('<li>').text(msg)); //This actually adds stuff to the form
});
