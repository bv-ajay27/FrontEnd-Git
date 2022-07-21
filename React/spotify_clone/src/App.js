import React, { useEffect, useState } from 'react';
import Login from './components/Login'
import {getTokenFromUrl} from './components/spotify'
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import { DataLayerValue, useDataLayervalue } from './components/DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const[token,setToken] = useState(null);
  const [{ user },dispatch] = useDataLayervalue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

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
          type: 'SET_USER',
          user: user,
        })  
        console.log('a', user);
        console.log("alien",token );
      });
    }
    console.log("i have a token", token);
  },[])
  return (
    <div className="app">
      {
        token ? (
          <Player/>
        ) :(
          <Login />
        )
      }
      
    </div>
  );
}

export default App;
