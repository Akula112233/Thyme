const express = require('express')
const https = require("https")
const socketIo = require("socket.io")
const index = require("./routes/index");
const fs = require("fs")

const options = {
	key: fs.readFileSync("/home/ec2-user/Thyme/key.pem"),
	cert: fs.readFileSync("/home/ec2-user/Thyme/cert.pem")
}

const port = process.env.PORT || 8000;

const app = express()
app.use(index)

const server = https.createServer(options, app)

const io = socketIo(server)

io.on('connection', (socket) => {
    console.log(socket.client.conn.server.clientsCount + " Client(s) Connected")
    io.emit('num clients', socket.client.conn.server.clientsCount)
    socket.on('sendMessage', (message, author) => {
        io.emit('chat message', {message, author})
    })
    socket.on('disconnect', () => {
        io.emit('num clients', socket.client.conn.server.clientsCount)
        console.log(socket.client.conn.server.clientsCount + " Client(s) Connected")
    })

})

server.listen(port, () => {console.log("listening on port " + port)})
