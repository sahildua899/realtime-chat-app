import React, { useState } from 'react'
import './myStyles.css'
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import MessageOthers from './MessageOthers';
import MessageSelf from './MessageSelf';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { useNavigate } from 'react-router-dom';


 const ChatArea = () => {
    const [conversations, setConversations] = useState([
        {
          name:"Test#1",
          lastMessage:'Last Message#1',
          timeStamp:'today'
        },
        {
          name:"Test#2",
          lastMessage:'Last Message#2',
          timeStamp:'today'
        },
        {
          name:"Test#3",
          lastMessage:'Last Message#3',
          timeStamp:'today'
        }
      ]); 

      var props = conversations[0]
      const navigate = useNavigate()
  return (
    <div className='chatArea-container'>
        <div className='chatArea-header'>
            <IconButton>
                <KeyboardBackspaceOutlinedIcon titleAccess='Go Back' onClick={()=>{navigate('/app/welcome')}} />
            </IconButton>
            <p className='con-icon'>{props.name[0]}</p>
            <div className='header-text'>
                <p className='con-title'>{props.name}</p>
                <p className='con-timeStamp'>{props.timeStamp}</p>
            </div>
            <IconButton>
                <DeleteIcon titleAccess='Delete Chat' />
            </IconButton>
        </div>
        <div className='messages-container'>
            <MessageOthers />
            <MessageSelf />
            <MessageOthers />
            <MessageSelf />
            <MessageOthers />
            <MessageSelf />
            <MessageOthers />
            <MessageSelf />
            <MessageOthers />
            <MessageSelf />
            <MessageOthers />
            <MessageSelf />
            <MessageOthers />
            <MessageSelf />
            <MessageOthers />
            <MessageSelf />
            <MessageOthers />
            <MessageSelf />
        </div>
        <div className='text-input-area'>
            <input placeholder='Type a Message' className='search-box' />
            <IconButton>
                <SendIcon />
            </IconButton>
        </div>
    </div>
  );
}

export default ChatArea
