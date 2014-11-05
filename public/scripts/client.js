window.onload = function(){

    var socket = io.connect('http://104.131.10.181:8734/');

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