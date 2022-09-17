import React from "react";
import "./ChildComp1.css"

// const SubChildComp1 = (props) =>{
const SubChildComp1 = ({title,color,backgroundColor}) =>{
    // console.log(props);
    return(
        <div className="SubChildComp1">
            {/* <h2>props.title</h2> */}
            <h2>{title}</h2>
            {color && <p style={{color:"red"}}>Color is getting changed to here {color}</p>}

            {color && <p style={{color:"green"}}>{color}it displayed only in this GrandChild (here we passed the other props attribute as color it is displayed only on the accessed child in Parent i.e..(ChildComp1))</p>}

            {backgroundColor && <p style = {{backgroundColor:"orange"}}>This text BGcolor changed to orange --- That too in grand child 2 beacuse it only has that attribute</p> }
            
            <h3>This is Sub Child for ChildComp1</h3>
            <p> To link SubChild same procedure done in the ChildComp because ChildComp1 is child component to App.js as similar to SubChildComp1 is child comp to ChildComp1</p>
        </div>
    )
}

export default SubChildComp1