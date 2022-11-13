import React from 'react'
import './style.css'
import logo from "./images/logo.jpg"
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
    <div className='main'>
      <div className='header'>
        <div className='Logo'>
          <img src= {logo} alt="logo" style={{height : "30px",width:"40px"}}/>
          {/* // <img src="images/logo.jpg" alt='logo'></img> */}
          <span>LeanPitch</span>
        </div>
        <button className='contactUs'>Contact Us</button>
        <button className='subscribe'>Subscribe</button>
      </div>
      <div className='links'>
          <nav>
              <Link to="/Trainings"><li>Trainings</li></Link>
              <Link to="/OurMeetUps"><li>Our MeetUps</li></Link>
              <Link to="/Webinars"><li>Webinars</li></Link>
              <Link to="/Conference"><li>Conference</li></Link>
              <Link to="/Videos"><li>Videos</li></Link>
              <Link to="/PM-Speak"><li>PM Speak Series</li></Link>
              <Link to="/Be-speaker"><li>Be a Speaker</li></Link>
              <Link to="/Podcasts"><li>Podcasts</li></Link>
              <Link to="/Blogs"><li>Blogs</li></Link>
              <Link to="/About"><li>About Us</li></Link>
          </nav>
      </div>
    </div>
    </>
  )
}

export default Home