import React from "react";

const Bulb_On_Off = () =>{
    return(
        <div className="Bulb_On_Off">
            <h1>This is ChildComp1</h1>
            <img id="myImage" onclick="changeImage()" src="https://www.w3schools.com/js/pic_bulboff.gif" width="100" height="180"></img>
            <button>onclick={img}</button>

            <p>Hello</p>
            
        </div>
    )
}

export default Bulb_On_Off