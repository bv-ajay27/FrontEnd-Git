import React from 'react'
import './style.css'
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
    <div className='main'>
      <div className='header'>
        <div className='Logo'>
          <img src="images/logo.jpg" alt='logo'></img>
          <span>LeanPitch</span>
        </div>
        <button className='contactUs'>Contact Us</button>
        <button className='subscribe'>Subscribe</button>
      </div>
      <div>
          <nav>
              {/* <Link to="/"><li>Home</li></Link> */}
              <Link to="/About"><li>About</li></Link>
              <Link to="/ContactUs"><li>ContactUs</li></Link>
              <Link to="/OurMeetUps"><li>Our MeetUps</li></Link>
              <Link to="/Register"><li>Register</li></Link>
          </nav>
      </div>
    </div>
    </>
  )
}

export default Home