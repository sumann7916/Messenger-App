import React from 'react'
import "./Home.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Conversation from '../../components/conversation/Conversation'
import Message from '../../components/message/Message'


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
            <Message/>
            <Message/>
            <Message own />
            <Message  />
            <Message own />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
          </div>

          <div className="chatBoxBottom">
            <textarea className='chatMessageInput' placeholder='write message' ></textarea>
            <button className='chatSubmit'>Send</button>
          </div>

        </div>
      </div>
      <div className="profileDesc">
        <div className="profileDescWrapper">
          <span className="profileHeader">Profile</span>
        <div className='activeConversation'> 
        <img className="profileImg" 
        src="https://i.ibb.co/xjyvLKQ/pexels-pixabay-220453.jpg" 
        alt=""/>
        <span className="profileName">Adam Smith</span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home
