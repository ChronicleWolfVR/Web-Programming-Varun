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

<div id="gameDiv" style="display:none;">
   <div id="chat-text" style="position:absolute;top:0px;bottom:25px;width:99%;overflow-y:scroll;">
     <div>Logged In!</div>
   </div>
 
   <form id="chat-form">
     <input id="chat-input" type="text" style="position:absolute;bottom:0px;height:25px;width:99%;"></input>
   </form>
   <button style='position:absolute;right:5px;top:5px;' onClick="window.location.reload();">Logout</button> 
 </div>

 <script src="/socket.io/socket.io.js"></script>

 <script>
 var socket = io();
 
 //sign
 var signDiv         = document.getElementById('signDiv');
 var signDivUsername = document.getElementById('signDiv-username');
 var signDivSignIn   = document.getElementById('signDiv-signIn');
 var signDivSignUp   = document.getElementById('signDiv-signUp');
 var signDivPassword = document.getElementById('signDiv-password');
 
 signDivSignIn.onclick = function(){
   socket.emit('signIn',{username:signDivUsername.value,password:signDivPassword.value});
 }
 signDivSignUp.onclick = function(){
   socket.emit('signUp',{username:signDivUsername.value,password:signDivPassword.value});
 }
 socket.on('signInResponse',function(data){
   if(data.success){
     signDiv.style.display = 'none';
     gameDiv.style.display = 'inline-block';
   } else
     alert("Sign in unsuccessul.");
 });
 socket.on('signUpResponse',function(data){
   if(data.success){
     alert("Sign up successul.");
   } else
     alert("Sign up unsuccessul.");
 });
 
 //chat - only be used after logging in
 var chatText  = document.getElementById('chat-text');
 var chatInput = document.getElementById('chat-input');
 var chatForm  = document.getElementById('chat-form');
 chatInput.value = 'Type text and press return';

 
 socket.on('addToChat',function(data){
   chatText.innerHTML += '<div>' + data + '</div>';
   chatText.scrollTop = chatText.scrollHeight;
 });
 
 chatForm.onsubmit = function(e){
   e.preventDefault();
   socket.emit('sendMsgToServer',chatInput.value);
   chatInput.value = '';		
 }
</script>
</body>
</html>
`;

