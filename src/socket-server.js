var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on("connection", function(socket) {
    console.log('we got a connection');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on('sendMessage', function(message) {
        console.log('Received a message: '+message.messageText);
        var today = new Date();
        var todayString = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' '+
            today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        message.date=todayString;
        io.emit('broadcastMessage', message);
    });
});

http.listen(4444, function(){
    console.log('listening on *:4444');
});
