import React from 'react'
import "./Home.css"
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
  return (
    <div className='messenger'>

      <div className="sidebar">
        <Sidebar/>
      </div>

      <div className="chatMenu">
        <div className="chatMenuWrapper"></div>
      </div>

      <div className="chatbox">
        <div className="chatboxWrapper"></div>
      </div>

      <div className="profileDesc">
        <div className="profileDescWrapper"></div>
      </div>
    </div>
  )
}

export default Home
