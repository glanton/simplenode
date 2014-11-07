//update
/*
var http = require('http');
var io = require('socket.io');

var server = http.createServer(function(request, response){
   console.log('Connected to Node server');
   response.writeHead(200, {'content-type': 'plain-text'});
   response.end();
});

server.listen(8734);
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
*/




var http = require('http');
var io = require('socket.io');

var server = http.createServer(function(request, response){
   console.log('Connected to Node server');
   response.writeHead(200, {'content-type': 'plain-text'});
   response.end();
});

server.listen(8734);
console.log('listening on port 8734');
var ioServer = io.listen(server);

// create empty player list when server starts
var playerList = [];

// establish game starting data
var playerOneDirection = 1;
var playerTwoDirection = 1;
var GameState = {
  playerOnePosition : 350,
  playerTwoPosition : 350
}


ioServer.sockets.on('connection', function(socket){
   
   socket.on('join_game', function() {
      console.log('in - ' + playerList.length);
      
      var currentPlayer = '';
   
      // if player list empty assign player one to first connection
      if (playerList.length == 0) {
         playerList[0] = 'playerOne';
         currentPlayer = playerList[0];
      // if player list has one player assign player two to second connection
      } else if (playerList.length == 1) {
         playerList[1] = 'playerTwo';
         currentPlayer = playerList[1];
      // if player list has two players assign waiting code to all other connections
      } else {
         currentPlayer = 'waiting';
      }
      
      socket.emit('assign_player', currentPlayer);
       
   });
   
   
   socket.on('client_requests_update', function(PlayerData){
      // adjust player directions based on sent player data
      if (PlayerData.assignedPlayer == 'playerOne') {
         if (PlayerData.keyMap[83]) {
            playerOneDirection = -1;
         }
         if (PlayerData.keyMap[87]) {
            playerOneDirection = 1;
         }
         if (PlayerData.keyMap[83] && PlayerData.keyMap[87]) {
            playerOneDirection = 0;
         }
      } else if (PlayerData.assignedPlayer == 'playerTwo') {
         if (PlayerData.keyMap[83]) {
            playerTwoDirection = -1;
         }
         if (PlayerData.keyMap[87]) {
            playerTwoDirection = 1;
         }
         if (PlayerData.keyMap[83] && PlayerData.keyMap[87]) {
            playerTwoDirection = 0;
         }
      }
      
      // reverse player directions if at edge of map
      if (GameState.playerOnePosition <= 5 || GameState.playerOnePosition >= 400) {
         playerOneDirection = playerOneDirection * -1;
      }

      if (GameState.playerTwoPosition <= 5 || GameState.playerTwoPosition >= 400) {
         playerTwoDirection = playerTwoDirection * -1;
      }
      
      // move players
      GameState.playerOnePosition = GameState.playerOnePosition - playerOneDirection;
      GameState.playerTwoPosition = GameState.playerTwoPosition - playerTwoDirection;
      
      socket.emit('server_sends_update', GameState);
   });
   
});




   