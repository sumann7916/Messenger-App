import React from 'react'
import "./Home.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Conversation from '../../components/conversation/Conversation'

const Home = () => {
  return (
    <div className='messenger'>

      <div className="sidebar">
        <Sidebar/>
      </div>

      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input placeholder='Search Chats' className='chatMenuInput'/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
          <Conversation/>
          <Conversation/>      
        </div>
      </div>

      <div className="chatbox">
        <div className="chatboxWrapper">
          <div className="chatBoxTop">

          </div>
          <div className="chatBoxBottom">
            
          </div>
        </div>
      </div>

      <div className="profileDesc">
        <div className="profileDescWrapper"></div>
      </div>
    </div>
  )
}

export default Home
