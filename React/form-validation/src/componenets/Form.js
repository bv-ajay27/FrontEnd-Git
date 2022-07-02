import React,{ useState } from 'react'
import "./style.css";


function Form() {
    const [input,setInput] = useState({
        username : '',
        password : '',
        confirmPassword : '',
        Email :'',
        Mobile: '',
    })
    // input is the destructed from of the complete input that we mentioned
    const {username,password,confirmPassword,Email,Mobile} = input;
    const inputHandler = e =>{
        setInput({...input,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
      e.preventDefault()
      if(username.length <= 7 || password === confirmPassword)
      {
        console.log(input)
      }
      else if(password !== confirmPassword)
      {
        alert("Passwords are not matching")
      }
      else{
        alert("character are must be more than 6 ")
      }
    }
  return (
    <>
       <form onSubmit={submitHandler}>
           <label>UserName <sup>*</sup></label>
           <br/>
           <input type="text" placeholder='Username' name="username" value={username} onChange={inputHandler}/>
           <br/>
           <label>Password <sup>*</sup>:</label>
           <br/>
           <input type="password" placeholder='password' name="password" value={password} onChange={inputHandler}/>
           <br/>
           <label>Confirm Password <sup>*</sup>:</label>
           <br/>
           <input type="password" placeholder='Cfrm password' name="confirmPassword" value={confirmPassword} onChange={inputHandler}/>
           <br/>
           <label>Email <sup>*</sup>:</label>
           <br/>
           <input type="Email" placeholder='Email' name="Email" value={Email} onChange={inputHandler}/>
           <br/>
           <label>Mobile Number <sup>*</sup>:</label>
           <br/>
           <input type="text" placeholder='+91 1234567890' name="Mobile" value={Mobile} onChange={inputHandler}/>

           <button type="submit" name='submit'> Submit </button>
        </form> 
    </>
  )
}

export default Form