import React from 'react'
import Message from '../Message/Message'
import './Messages.css'

function Messages({messages,name}) {
    return (
            <div className='messages_container'>
                {messages.map((message,i) => <div key={i}><Message message = {message} name={name}/></div>)}
            </div>
    )
}

export default Messages
