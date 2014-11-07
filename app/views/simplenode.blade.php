<!DOCTYPE html>
<html>
<head>
    <title>simplenode</title>
    <script type="text/javascript" src="https://cdn.socket.io/socket.io-1.2.0.js"></script>
    <script type="text/javascript" src='{{ asset('scripts/client.js') }}'></script>
    <style type="text/css">
        .gameCanvas {
            height: 400px;
            width: 400px;
            background-color: black;
        }
          
        #playerOne {
            height: 10px;
            width: 10px;
            background-color: red;
            position: absolute;
            top: 350px;
            left: 150px;
        }
          
        #playerTwo {
            height: 10px;
            width: 10px;
            background-color: blue;
            position: absolute;
            top: 350px;
            left: 250px;
        }
    </style>
</head>
<body>
    <!--
    <input id="firstNumber" type="number">
    <button id="submitNumber">Submit</button>
    <button id="getAnswer">Update</button>
    <br>
    <div id="mathAnswer"></div>
    -->
    
    <div class="gameCanvas">
    <div id="playerOne"></div>
    <div id="playerTwo"></div>
  </div>
</body>
</html>