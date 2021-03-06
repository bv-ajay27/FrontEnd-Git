import React, { useEffect, useState } from 'react';
import Login from './components/Login'
import {getTokenFromUrl} from './components/spotify'
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import { DataLayerValue, useDataLayerValue } from './components/DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const[token,setToken] = useState(null);

  const [{ user },dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    let _token = hash.access_token;

    if(_token){

      dispatch({
        type: "SET_TOKEN",
        token:_token,
      })
      setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe()
      .then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });  

      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      //  weekly playlist

      spotify.getPlaylist('37i9dQZEVXcDDW7Qf6aBEu').then(response =>{
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:response,
        })
      })
    }
    // console.log('a', user);
    // console.log("token:====",_token);
    // console.log("i have a token", _token);
  },[]);
  return (
    <div className="app">
      {
        token ? 
          <Player spotify = {spotify}/>
        :
          <Login />
      } 
    </div>
  );
}

export default App;
