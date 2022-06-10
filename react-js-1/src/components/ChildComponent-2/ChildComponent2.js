import React from "react";
import GrandChild2 from "./GrandChild2";

const ChildComponent2 = () =>{
    return(
        // inline css 
        <div 
        className='ChildComponent2'
        style={{color : "green"}}> 
            <h1>Child Component-2</h1>
            <p>Hey Man..This</p>
            <p><b>Ctrl + Shift + R is for react page refresh</b></p>
            <br/>
            Hello World..!
            <GrandChild2/>
        </div>
    );
}

export default ChildComponent2