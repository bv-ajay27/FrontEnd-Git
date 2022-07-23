import React from 'react'
import body from './body.css';
import Header from './Header';

function Body({spotify}) {
  return (
    <div className='body'>
        {/* <h1> i'm the body</h1> */}
        <Header spotify={spotify}/>
    </div>
  )
}

export default Body