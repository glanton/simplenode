//update

var http = require('http');
var io = require('socket.io');

var server = http.createServer(function(request, response){
   console.log('Connected to Node server');
   response.writeHead(200, {'content-type': 'plain-text'});
   //response.write('simplenode');
   response.end();
});

server.listen(8734, 'localhost');
console.log('listening on port 8734');
var ioServer = io.listen(server);

var answer = 0;

ioServer.sockets.on('connection', function(socket){
   
   socket.on('do_math', function(data){
      answer = parseInt(data) + 3;
      socket.emit('math_answer', answer);
   });
   
   socket.on('get_answer', function(){
      socket.emit('math_answer', answer);
   });
   
});