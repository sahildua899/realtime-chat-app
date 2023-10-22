import React from 'react'
import logo from '../images/live-chat_512px.png'
import './myStyles.css'

const Welcome = () => {
  return (
    <div className='welcome-container'>
        <img className='welcome-logo' src={logo} alt='Logo' />
        <p>View and text directly to people present in chat Rooms</p>
    </div>
  )
}

export default Welcome