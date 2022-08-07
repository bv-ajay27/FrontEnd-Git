import React from 'react'
import SubChildComp1 from "./SubChildComp1";
import "./ChildComp1.css"

const ChildComp1 = () =>{
    return(
        <div className='ChildComp1'>
            <h1>Child Component -1</h1>
            
            <p>To create a react app: npx create-react-app (name of the folder)</p>
            <p>For Example : <b>npx create-react-app "react-js-practice"</b></p>
            <p>To start the app that will host in browser by using : <b>npm start</b></p>
            <p>To change the folder we use command : cd (name of the folder) Ex: <b>cd react-js-2</b></p>
            <p>To Refresh the react page :<b>Ctrl + Shift + R</b></p>
            <p>To exit from terminal : <b>Ctrl + C -- Y</b></p>
            <SubChildComp1 title="GrandChild-1" color = "red"/>
            <SubChildComp1 title="GrandChild-2" color="black" backgroundColor = "orange" />
            <SubChildComp1 title="GrandChild-3"/>
            <SubChildComp1 title="GrandChild-5"/>
            <SubChildComp1 title="GrandChild-4" color="black" backgroundColor = "orange" />
        </div>
    )
}

export default ChildComp1