const express = require("express")
const http = require("http")
const socketio = require("socket.io")
const router = require('./router')

const { addUser, removeUser, getUser, getUserInRoom } = require("./user");

const port = process.env.PORT || 5000
const app = express()
const server = http.createServer(app)
const io = socketio(server)
app.use(router)

io.on('connection',(socket)=>{
    socket.on("join" , ({name,room},callback)=>{
        console.log(name,room)
        const {error , user } = addUser({id:socket.id,name,room})
        if(error){
            return callback(error)
        }

        socket.emit('message',{user:"admin" , text:`${user.name} Welcome to the ${user.room}`})
        socket.broadcast.to(user.room).emit('message',{user:"admin",text:`${user.name} has joined`})

        socket.join(user.room);
        io.to(user.room).emit('roomData', {room : user.room, users: getUserInRoom(user.room)})
        callback()
    })

    socket.on('sendMessage', (message,callback)=>{
        const user = getUser(socket.id)
        io.to(user.room).emit('message', {user: user.name , text: message})
        io.to(user.room).emit('roomData', { room: user.room, users: getUserInRoom(user.room)})
        callback()
    })

    socket.on('disconnect',()=>{
        console.log("User had left !!!")
    })
})

server .listen(port,()=>{
    console.log(`Server created on port ${port}`)
})