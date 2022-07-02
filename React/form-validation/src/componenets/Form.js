import React,{ useState } from 'react'
import "./style.css";


function Form() {
    const [input,setInput] = useState({
        username : '',
        password : '',
        confirmPassword : '',
        email :'',
        Mobile: '',
    })
    const {username,password,confirmPassword,email,Mobile} = input;
    const inputHandler = e =>{
        setInput({...input,[e.target.name]:[e.target.value]})
    }
  return (
    <>
       <form>
           <label>UserName <sup>*</sup></label>
           <br/>
           <input type="text" placeholder='Username' name="name" value={username}/>
           <br/>
           <label>Password <sup>*</sup>:</label>
           <br/>
           <input type="password" placeholder='password' value={password}/>
           <br/>
           <label>Confirm Password <sup>*</sup>:</label>
           <br/>
           <input type="password" placeholder='Cfrm password'/>
           <br/>
           <label>Email <sup>*</sup>:</label>
           <br/>
           <input type="email" placeholder='email'/>
           <br/>
           <label>Mobile Number <sup>*</sup>:</label>
           <br/>
           <input type="text" placeholder='+91 1234567890'/>

           <button> Submit </button>
        </form> 
    </>
  )
}

export default Form