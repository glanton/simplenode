<!DOCTYPE html>
<html>
<head>
    <title>simplenode</title>
    <!--<script type="text/javascript" src="http://localhost:8333/socket.io/socket.io.js"></script>-->
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