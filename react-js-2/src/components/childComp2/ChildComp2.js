import React from "react";
import SubChildComp2 from "./SubChildComp2";
import SubChild3 from "./SubChild3";

const ChildComp2 = () =>{
    return(
        <div className="ChildComp2">
            <h1>This is Child2</h1>
            {/* <SubChildComp2 title="classBasedProps"/> */}
            <SubChildComp2 count = "0"/>
            <SubChild3 title="Heading-1" color="yellow" backgroundColor="pink"/>
            <SubChild3 color="voilet" backgroundColor="white"/>
        </div>
    )
}

export default ChildComp2