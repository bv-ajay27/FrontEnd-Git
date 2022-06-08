import React from "react";

const GrandChild1 = () =>{
    return (
        <div 
        className="GrandChild1" 
        style={{backgroundColor: 'green',color : "white"}}> 
            <h3>This is GrandChild1 and it is imported in ChildComponent1</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum rerum eos accusantium iusto facere id a delectus ipsam, aliquam ad tempora perferendis magnam laudantium nostrum ut corporis, temporibus similique alias molestiae velit enim ullam! Illum excepturi necessitatibus, tenetur consequatur ratione quas ipsa id temporibus minus sapiente quia iste suscipit vel?</p>
        </div>
    );
}

export default GrandChild1;