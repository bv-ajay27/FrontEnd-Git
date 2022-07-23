import React from 'react'
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from '@material-ui/core';

function Header() {
  return (
    <div className="header">
        <div className="header_left">
            <SearchIcon/>
            <input placeholder="Search for Artists, Songs, or Podcasts" type ="text" />
        </div>
        <div className="header_right">
            <Avatar src="" alt="" />
            <h4>Shankar</h4>
        </div>
    </div>
  )
}

export default Header