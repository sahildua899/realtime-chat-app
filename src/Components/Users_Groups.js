import React from 'react'
import './myStyles.css'
import logo from '../images/live-chat_512px.png'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom';
const Users_Groups = () => {
    const navigate = useNavigate()
  return (
    <div className='list-container'>
        <div className='ug-header'>
            <IconButton>
                <KeyboardBackspaceOutlinedIcon titleAccess='Go Back' onClick={()=>{navigate('/app/welcome')}} />
            </IconButton>
            <img src={logo} style={{height:"2rem", width:"2rem", marginLeft:'10 px'}} />
            <p className='ug-title'>Online Users</p>
        </div>
        <div className='ug-search'>
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <input placeholder='Search' className='search-box' />
        </div>
        <div className='ug-list'>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
            <div className='list-tem'>
                <p className='con-icon'>T</p>
                <p className='con-title'>Test User</p>
            </div>
        </div>
    </div>
  )
}

export default Users_Groups