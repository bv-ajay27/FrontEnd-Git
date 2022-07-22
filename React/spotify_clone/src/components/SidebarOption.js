import React from 'react'
import './sidebarOptions.css'

function SidebarOption( {title, Icon} ) {
  return (
    <div className='sidebarOption'>
        <p>{title}</p>
    </div>
  )
}

export default SidebarOption