import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import "./style.css"
import Search from './Search'


const Home = () => {
    const [imgName,setImgName] = useState('');
    let history = useHistory();
  return (
    <>
      <div className="container">
        <div className="navBar">
          <ul>
            <li>
              <h3 className="brand">
                Pixabay<sub>get Photos..</sub>
              </h3>
            </li>
            <li style={{ float: "right" }}>
              <button>SignUp</button>
            </li>
            <li style={{ float: "right" }}>
              <button>Login</button>
            </li>
          </ul>
        </div>
        <div className="search">
          <h2>Stunning free images & royalty free stock</h2>
          <h4>
            Over 2.6 million+ high quality stock images, videos and music shared
            by our talented community.
          </h4>
          <br />
          <div className="searchBar">
            <input type="text" placeholder="serach..." onChange={(e) => setImgName(e.target.value)}/>
          </div>
          <br />
          <button onClick={history.push('/Search')}>Search</button>
        </div>
      </div>
    </>
  );
}

export default Home