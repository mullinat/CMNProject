var socket = io();

function LiveChat() {
    var message = document.getElementById("LiveChatInput").value;
    if (message == "") {
        return false;
    }
    console.log(message);
    socket.emit('chat message1', message);
    $('#LiveChatInput').val('');
    return false;
}
socket.on('chat message1', function(msg) {
    console.log('chat message 1');
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
    socket.emit('chat message2', message);
    $('#QandAChatInput').val('');
    return false;
}
socket.on('chat message2', function(msg) {
    console.log('chat message 2');
    $('#comments').prepend($('<li>').text(msg)); //This actually adds stuff to the form
});
