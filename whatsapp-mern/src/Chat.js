import React, { useState } from 'react';
import "./Chat.css";
import axios from './axios'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Avatar, IconButton } from "@mui/material";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function Chat({messages}) {
  const [input,setInput]=useState('')
  const sendMessage= async (e)=>{
    e.preventDefault()
    await axios.post('/messages/new',{
      message:input,
      name:"Demo app",
      timestamp:"just now!",
      recevied:false
    })
    setInput('')
  }
  return (
    <div className='chat'>
      <div className="chat__header">
        <Avatar/>
        <div className="chat__headerInfo">
          <h3>Room name </h3>
          <p>last seen at..</p>

        
        </div>
        <div className="chat__headerRight">
         <IconButton>
          <SearchOutlinedIcon/>
         </IconButton>
         <IconButton>
          <AttachFileIcon/>
         </IconButton>
         <IconButton>
          <MoreVertIcon/>
         </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((messages)=>(
           <p className={`chat__message ${messages.recevied && 'chat__message chat__reciever'}`}>
           <span className='chat__name'>{messages.name}</span>
           
           {messages.message}
           <span className='chat__timestamp'>
            {messages.timestamp}</span> 
          
           </p>
        ))}
       
          
      </div>
      <div className="chat__footer">
         <InsertEmoticonIcon/>
         <form >
          <input value={input} onChange={e=>setInput(e.target.value)} type="text"  placeholder='Type a message' />
          <button onClick={sendMessage} type="submit">send a message</button>
         </form>
         
         <MicIcon/>
      </div>
    </div>
  )
}

export default Chat
