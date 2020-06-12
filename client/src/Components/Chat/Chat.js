import React, {useState,useEffect} from 'react'
import io from 'socket.io-client'
import Messages from '../Messages/Messages'
import Input from '../Input/Input'
import './Chat.css'
import Infobar from '../Infobar/Infobar'

let socket;

function Chat(props) {
    
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const ENDPOINT = "localhost:5000"
    useEffect(()=>{
        const name = props.match.params.name
        const room = props.match.params.room

        socket = io(ENDPOINT)

        setName(name);
        setRoom(room)


        socket.emit('join' , {name,room},()=>{})

        return () =>{
            socket.emit("disconnect")
            socket.off()
        }
    },[ENDPOINT,props.match.params])

    useEffect(()=>{
        socket.on('message',(message) =>{
            setMessages(messages.concat(message))
        })
        console.log('message effect',messages)
    },[messages])

    const sendMessage = (event)=>{
        event.preventDefault()
        if(message){
            socket.emit('sendMessage',message,()=>{
                setMessage('')
            })
        }
        console.log('sendMessage func')
    }
    


    return (
        <div className="chat_container">
            <div className='chat_inner_container'>
                <Infobar room = {room}/>
                <Messages messages={messages} name = {name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    )
}

export default Chat
