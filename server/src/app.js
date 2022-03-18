const http = require('http');
const socketIO = require('socket.io');
const server = http.createServer();
const io = socketIO(server);
const PORT = process.env.PORT || 5000;
io.on('connection',socket => {
    console.log('New connection')
});

server.listen(PORT, () => {
    console.log(`listen to ${PORT}`);
})