// Step 1: Create Express App
    const express = require('express');
    const app = express();

// Step 2: Create plain HTTP Server. Feed it the Express App
// I can't answer this: Why are we making an HTTP Server?
const http = require('http');
const server = http.createServer(app);

// Step 3: Conect Wev Socket Server to HTTP 
const WebSocket = require('ws');
// What is meant by "server piggybacking"?
const wss = new WebSocket.Server({ server });


// Listen for new connections
wss.on('connection', (socket) => {
    // Listen for messages on the socket
    socket.on('message', (msg) =>{
        msg = JSON.parse(msg);
        console.log(msg);
    });
})




server.listen(6000, () => {
    console.log('You running, bro')
});