import React from 'react'
import "./style.css"


const Home = () => {
  return (
    <>
        <div className='container'>
            <div className='navBar'>
                <h3 className='brand'>Pixabay</h3>
                <div className='auth-btn'>
                    <button>SignUp</button>
                    <button>Login</button>
                </div>
            </div>
            <div className='search'>
                <h2>Stunning free images & royalty free stock</h2>
                <h4>
                    Over 2.6 million+ high quality stock images, videos and music shared by our talented community.
                </h4>
                <br/>
                <div className='searchBar'>
                    <input type="text"placeholder='serach...'/>
                </div><br/>
                <button onClick>Search</button>
            </div>
        </div>
    </>
  )
}

export default Home