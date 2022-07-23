import React from 'react'
import Body from './Body'
import './Player.css'
import Sidebar from './Sidebar'
import Footer from './Footer'

function Player({spotify}) {
  return (
    <div className='player'>
      <div className='player_body'>
        <Sidebar/>
        <Body spotify={spotify}/>
      </div>
      <Footer/>
      <h1>Welcome to Spotify</h1>
    </div>
  )
}

export default Player