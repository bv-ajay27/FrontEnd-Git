import React from 'react'
import './body.css';
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Header from './Header';
import SongRow from './SongRow';

function Body({spotify}) {
  const [{discover_weekly},dispatch] = useDataLayerValue();

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  return (
    <div className='body'>
        {/* <h1> i'm the body</h1> */}
        <Header spotify={spotify}/>
        <div className='body_info'>
          <img src ={discover_weekly?.images[0].url} alt ="" />
          <div className="body_infoText">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}/</p>
          </div>
          <div className="body_songs">
            <div className='body_icons'>
              <PlayCircleFilledIcon className="body_shuffle" />
              <FavoriteIcon fontSize="large"/>
              <MoreHorizIcon />
          </div>
            {/* // list of Songs */}
            {discover_weekly?.tracks.items.map((item) => (
            <SongRow playSong={playSong} track={item.track} />
            ))}
          </div>
        </div>
    </div>
  )
}

export default Body