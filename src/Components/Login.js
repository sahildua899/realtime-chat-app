import React from 'react'
import './myStyles.css'
import logo from '../images/live-chat_512px.png'
import { Button, TextField } from '@mui/material'

const Login = () => {
  return (
    <div className='login-container'>
        <div className='image-container'>
            <img src={logo} className='welcome-logo'/>
        </div>
        <div className='login-box'>
            <p className='login-text'>Login to your Account</p>
            <TextField id="standard-basic" label="Enter Username" variant="outlined" />
            <TextField id="standard-password-input" label="Password" type='password' autoComplete='current-password' />
            <Button variant="outlined">Login</Button>
        </div>
    </div>
  )
}

export default Login