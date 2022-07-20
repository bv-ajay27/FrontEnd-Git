import React, { useEffect,useState } from 'react';
import Login from './components/Login'
import {getTokenFromUrl} from './components/spotify'
import SpotifyWebApi from 'spotify-web-api-js';


const spotify = new SpotifyWebApi();

function App() {
  const[token,setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const token1 = hash.access_token;

    if(token1){
      setToken(token1);

      spotify.setAccessToken(token1);

      spotify.getMe()
      .then((user) => {
        console.log('a', user)
      });
    }


    console.log("i have a token", token);
  },[])
  return (
    <div className="">

        token ? (
          <h1>I'm logged in</h1>
        ) :(
          <Login />
        )
      }
      
    </div>
  );
}

export default App;
