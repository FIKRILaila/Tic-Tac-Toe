const http = require('http');
const server = http.createServer();
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`listen to ${PORT}`);
})