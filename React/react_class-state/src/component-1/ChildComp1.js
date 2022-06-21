import React from "react";

const ChildComp1 = (props) =>{
    return(
        <div className="ChildComp1">
            <h1>This is ChildComp1</h1>
            <p>Hello</p>
            <p>{props.title}</p>
        </div>
    )
}

export default ChildComp1