import React, { useState } from 'react'
import "./ButtonStyle.css"

function Calculator() {
  // using useSet Hook input is the value at each time
    const [input,setInput] = useState("");
    const inputHandler = i =>{
        setInput(i.target.value)
    }
    const [result,setResult] = useState('');
  return (
    <>
      {/* <input type="text" value ={result === 0 ? input : result} name="input" onChange={inputHandler}/> */}
      <div className='container'>
        <div className='display'>
          <div className='in'>
            <input type="text" value ={input} name="input" onChange={inputHandler}/>
          </div>
          <div className='res'>
            <span>{result}</span>
          </div>
        </div>
        <div className='btn'>
          <button className='special' onClick={() => {
            setInput('');
            setResult(" ");}
          }>CLR</button>
          <button onClick={() => setInput(input+'/')}>/</button>
          <button onClick={() => setInput(input+'*')}>*</button>
          <button onClick={() => setInput(input+'(')}>(</button>
          <button onClick={() => setInput(input+')')}>)</button>
          
          <button onClick={() => setInput(input+'1')}>1</button>
          <button onClick={() => setInput(input+'2')}>2</button>
          <button onClick={() => setInput(input+'3')}>3</button>
          <button onClick={() => setInput(input+'4')}>4</button>
          <button onClick={() => setInput(input+'+')}>+</button>

          <button onClick={() => setInput(input+'5')}>5</button>
          <button onClick={() => setInput(input+'6')}>6</button>
          <button onClick={() => setInput(input+'7')}>7</button>
          <button onClick={() => setInput(input+'8')}>8</button>
          <button onClick={() => setInput(input+'-')}>-</button>

          <button onClick={() => setInput(input+'9')}>9</button>
          <button onClick={() => setInput(input+'0')}>0</button>
          <button onClick={() => setInput(input+'.')}>.</button>
          <button onClick={() => setInput(input+'00')}>00</button>
          <button className='special' onClick={() => setResult(eval(input))}>=</button>
        </div>
      </div>  
    </>
  )
}
export default Calculator