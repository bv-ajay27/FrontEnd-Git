import React from 'react'
import './sidebar.css'
import SidebarOption from './SidebarOption'
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicTwoToneIcon from '@material-ui/icons/LibraryMusicTwoTone';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const [{playlists}, dispatch] = useDataLayerValue();
  return (
    <div className='sidebar'>
        <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo"/>

        <SidebarOption Icon={HomeTwoToneIcon} title="Home"/>
        <SidebarOption Icon={SearchIcon} title="Search"/>
        <SidebarOption Icon={LibraryMusicTwoToneIcon} title="Your Library"/>

        <br/>

        <strong className='sidebar_title'>PLAY LIST</strong>
        <hr/>
        {playlists?.items?.map((playlist) =>(
            <SidebarOption title={playlist.name}/>
        ))}
        {/* <SidebarOption title="Hip hop"/>
        <SidebarOption title="Rock"/>
        <SidebarOption title="Jazz"/> */}
        {/* <h1>Im a Sidebar</h1> */}
    </div>
  );
}
 
export default Sidebar