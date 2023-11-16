/*Simple login and chat F28WP
Need to register and login before you can send/see chat messages
Stores login in a database (username/password)

Key featurse:
* minimal working example (single js file)
* sql datbase (user has to register or login to chat)
* client-client communication
* data is broadbast to other clients that have logged in
* dependancies: socket.io, mysql and express
*/

// Load modules
var express = require("express");
var mysql = require("mysql");
var socket = require("socket.io");

//Create simple client side sit
let htmlContent = `
<!DOCTYPE html>
<html>
<head>
<title>Chat</title>
<style>
#signDiv {
}


</style>

</head>
<body>
<div id="signDiv">
Username: <input id="signDiv-username" type="text"></input><br>
Password: <input id="signDiv-password" type="password"></input>
<br>
<button id="signDiv-signIn">Sign In</button>
<button id="signDiv-signUp">Sign Up</button>
</div>


`

