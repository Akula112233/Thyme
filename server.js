const express = require('express')
const http = require("http")
const socketIo = require("socket.io")
const index = require("./routes/index");


const port = process.env.PORT || 8000;

const app = express()
app.use(index)

const server = http.createServer(app)

const io = socketIo(server)

io.on('connection', (socket) => {
    console.log("New Client Connected")
    socket.on('sendMessage', (message, author) => {
        io.emit('chat message', {message, author})
    })

})

server.listen(port, () => {console.log("listening on port " + port)})
