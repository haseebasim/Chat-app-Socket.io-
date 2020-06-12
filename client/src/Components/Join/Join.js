import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Join.css'

function Join() {
    const [name,setName] = useState('')
    const [room,setRoom] = useState('')

    return (
        <div className="input_outter_container">
            <h1>Join A Room</h1>
            <div className='input_inner_container'>
                <input className='join_input'  type="text" placeholder='Name' onChange={(event)=>{setName(event.target.value)}}/>
                <input className='join_input' type="text" placeholder='Room' onChange={(event)=>{setRoom(event.target.value)}}/>
                <Link style={{width:"fit-content"}} onClick={event => (!name || !room) ? event.preventDefault():null} to={`/chat/${name}&${room}`}>
                    <button className='join_btn' type='submit'>Sign in</button>
                </Link>
            </div>
        </div>
    ) 
}

export default Join
