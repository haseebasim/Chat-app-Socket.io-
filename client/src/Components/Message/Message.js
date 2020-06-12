import React from 'react'
import './Message.css'

function Message({message : {user ,text},name}) {
    let isSentByCurrentUser = false

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName){
        isSentByCurrentUser = true
    }

    return (
        isSentByCurrentUser 
        ? 
        (
            <div className='message_container'>
                <p className='message_name'>{trimmedName}</p>
                <div>
                    <p className='message_text'>{text}</p>
                </div>
            </div>
        ) 
        : (
            <div className='message_container_other'>
                <p className='message_name'>{user}</p>
                <div>
                    <p className='message_text'>{text}</p>
                </div>
            </div>
        )
    )
}

export default Message
