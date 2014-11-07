/*window.onload = function(){

    // server
    // var socket = io.connect('http://104.131.10.181:8734/');
    var socket = io.connect('http://localhost:8734/');
    
    var submitNumber = document.getElementById('submitNumber');
    var getAnswer = document.getElementById('getAnswer');
    var firstNumber = document.getElementById('firstNumber');
    var mathAnswer = document.getElementById('mathAnswer');
    
    submitNumber.onclick = function(){
        socket.emit('do_math', firstNumber.value);
    };
    
    getAnswer.onclick = function(){
      socket.emit('get_answer');  
    };
    
    socket.on('math_answer', function(data){
        mathAnswer.innerHTML = data;
    });

};*/

  
  
// establish player data to be passed to server
var PlayerData = {
    assignedPlayer : '',
    keyMap : {
      83 : false,
      87 : false
    }
};


window.onload = function(){
    // grab player div elements
    var playerOneElem = document.getElementById("playerOne");
    var playerTwoElem = document.getElementById("playerTwo");
    
    var socket = io.connect('http://104.131.10.181:8734/');
    // var socket = io.connect('http://localhost:8734/');
    
    socket.emit('join_game');
    
    socket.on('assign_player', function(currentPlayer){
        PlayerData.assignedPlayer = currentPlayer;
        console.log('Player assignment: ' + PlayerData.assignedPlayer);
        
        if (PlayerData.assignedPlayer == 'waiting') {
            console.log('sorry, no available game');
        } else {
            setInterval(requestUpdate, 1000/30);
        }
    });
    
    function requestUpdate(){
        detectKeys();
        socket.emit('client_requests_update', PlayerData);
    }       
    
    socket.on('server_sends_update', function(GameState){
        playerOneElem.style.top = GameState.playerOnePosition + 'px';
        playerTwoElem.style.top = GameState.playerTwoPosition + 'px';
    });
    
};





function detectKeys(){
  document.onkeydown = function(event){
    if (event.keyCode in PlayerData.keyMap){
      PlayerData.keyMap[event.keyCode] = true;
    }
  };
  
  document.onkeyup = function(event){
    if (event.keyCode in PlayerData.keyMap){
      PlayerData.keyMap[event.keyCode] = false;
      // console.log(event.keyCode + " up");
    }     
  };
}



