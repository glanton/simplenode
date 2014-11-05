<!DOCTYPE html>
<html>
<head>
    <title>simplenode</title>
    <script type="text/javascript" src="https://cdn.socket.io/socket.io-1.2.0.js"></script>
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