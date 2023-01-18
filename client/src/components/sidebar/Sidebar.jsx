import React from 'react'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebarWrapper'>
       <div className="logo" >
            <img className="logoImg" src="https://i.ibb.co/BGtkb33/messenger-1.png" alt="Logo" />
        </div>
        <div className="sidebarMenu">
            <div className="chatButton" title="Chats">
                <img class="chatButtonImg" src="https://i.ibb.co/F0RWXKq/chat-bubble.png" alt="" />
            </div>
            <div className="friendsButton" title="Friends">
            <img class="friendsButtonImg" src="https://i.ibb.co/1v5vK4g/group.png" alt="" />
            </div>
            <div className="profileButton" title="User Menu">
            <img class="profileButtonImg" src="https://i.ibb.co/xjyvLKQ/pexels-pixabay-220453.jpg" alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Sidebar
