window.onload = function(){

    var socket = io.connect('http://localhost:3000');

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

};