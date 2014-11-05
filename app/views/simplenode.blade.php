<!DOCTYPE html>
<html>
<head>
    <title>simplenode</title>
    <script type="text/javascript" src="//cdn.socket.io/socket.io-1.0.0.js"></script>
    <script type="text/javascript" src='{{ asset('scripts/client.js') }}'></script>
</head>
<body>
    <input id="firstNumber" type="number">
    <button id="submitNumber">Submit</button>
    <button id="getAnswer">Update</button>
    <br>
    <div id="mathAnswer"></div>
</body>
</html>