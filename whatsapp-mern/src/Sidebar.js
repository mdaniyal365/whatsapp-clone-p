import React from "react";
import "./Sidebar.css";
import MessageIcon from '@mui/icons-material/Message';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SearchOutlined } from "@mui/icons-material";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://yt3.ggpht.com/yti/AHXOFjXOO0g1XD40Nau9_q18UPnePHEbeUCktspQ77Xc=s88-c-k-c0x00ffffff-no-rj-mo" />
        <div className="sidebar__headerRight">
        <IconButton>
        <DonutLargeIcon/>
        </IconButton>
        <IconButton>
        <MessageIcon/>
        </IconButton>

        <IconButton>
        <MoreVertIcon/>
        </IconButton>


          
          
        </div>
      </div>
      <div className="sidebar__search">
        <div className="side__searchContainer">
          <SearchOutlined/>
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
     <div className="sidebar__chats">
     

      <SidebarChat/>
      <SidebarChat/>
      <SidebarChat/>

     </div>

    </div>
  );
}

export default Sidebar;
