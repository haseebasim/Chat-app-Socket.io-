import React from 'react'
import './Input.css'
function Input({message,setMessage,sendMessage}) {
    return (
        <form className='input_form'>
            <input className='input_field' 
                type='text'
                placeholder="Type a message..."
                value={message}
                onChange={(event) =>{setMessage(event.target.value)}}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            />
            <button className='input_btn ' onClick={event => sendMessage(event)}><span className='fa fa-send'></span></button>
        </form>

    )
}

export default Input
