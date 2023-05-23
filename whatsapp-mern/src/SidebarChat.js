import React from 'react'
import'./SidebarChat.css'
import { Avatar } from '@mui/material'

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar/>
      <div className="sidebarChat__info">
        <h1 className='hiRoom'>Room name</h1>
        <p>This is the last message</p>
      </div>
    </div>
  );
}

export default SidebarChat
