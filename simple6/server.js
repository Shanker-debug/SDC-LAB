
const http = require('http');
const os = require('os');
const path = require('path');
const EventEmitter = require('events');

// Event module
const event = new EventEmitter();

event.on('greet', () => {
    console.log("Welcome to Node JS");
});

event.emit('greet');

// HTTP module
const server = http.createServer((req, res) => {
    res.write("<h2>Node JS Server</h2>");
    res.write("OS: " + os.platform() + "<br>");
    res.write("File: " + path.basename(__filename));
    res.end();
});

server.listen(3000, () => {
    console.log("Server running at port 3000");
});
