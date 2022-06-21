import React from 'react'
import GrandChild1 from './GrandChild1';

const ChildComponent1 = () =>{
    //Internal CSS
    let DivStyle = {fontSize : '15px'}
    //
    return(
        <div 
        className='ChildComponent1'
        style={DivStyle}>
            <h1>Child Component-1</h1>
            <br/>
            Hello World..!
            <p>for page refresh Ctrl + shift + R</p>
            <GrandChild1/>
            <GrandChild1/>
            <GrandChild1/>
            <GrandChild1/>
            <p>We can add as many as GrandChild components in parent component </p>
        </div>
    );
}

export default ChildComponent1