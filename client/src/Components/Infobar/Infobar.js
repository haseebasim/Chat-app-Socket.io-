import React from 'react'
import './Infobar.css'
function Infobar({room}) {
    return (
        <div className='infobar'>
            <div>
                <span className='fa fa-circle online_icon'></span>
                <span className='room_name'>{room}</span>
            </div>
            <div>
                <a className='close_link' href='/'><i className='fa fa-times'></i></a>
            </div>
        </div>
    )
}

export default Infobar
