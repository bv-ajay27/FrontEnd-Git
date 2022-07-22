import React from 'react'
import './sidebar.css'
import SidebarOption from './SidebarOption'

function Sidebar() {
  return (
    <div className='sidebar'>
        <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo"/>
        <SidebarOption title="Home"/>
        <SidebarOption title="Search"/>
        <SidebarOption title="Your Library"/>
        {/* <h1>Im a Sidebar</h1> */}
    </div>
  )
}

export default Sidebar