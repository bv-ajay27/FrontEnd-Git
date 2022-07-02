import React,{ useState } from 'react'

function UseState() {
    const [input,setInput] = useState(0);
    const handler = i =>{
        setInput(i.target.value)
    }
  return (
    <>
        <button onClick={handler}>Increment</button>
        <p>{input}</p>
    </>
  )
}

export default UseState