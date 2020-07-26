const express = require("express")
const https = require("https")
const socketIo = require("socket.io")
const index = require("./routes/index")
const fs = require("fs")
const helmet = require("helmet")

const options = {
	key: fs.readFileSync("/home/ec2-user/Thyme/key.pem"),
	cert: fs.readFileSync("/home/ec2-user/Thyme/cert.pem")
}

const port = process.env.PORT || 8000

const app = express()
app.use(helmet())
app.use(index)

const server = http.createServer(options, app)

const io = socketIo(server)

io.on('connection', (socket) => {
    console.log("New Client Connected")
    socket.on('sendMessage', (message, author) => {
        io.emit('chat message', {message, author})
    })

})

server.listen(port, () => {console.log("listening on port " + port)})
