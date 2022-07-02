import React,{ useState } from 'react'
import "./style.css";

function FormValidation() {
    const [data,setData] = useState({
        username : "",
        password : "",
        confirmPassword : "",
        Email : "",
        age : 0,
    })
    // destrcturing
    const {username,password,confirmPassword,Email,age} = data
    // onChange Handler
    const onChangehandler = e =>{
        setData({...data,[e.target.name] : e.target.value})
    }
    // submit handler
    const submitHandler = e =>{
        e.preventDefault()
        console.log(data)
    }
  return (
    <>
        <form onSubmit={submitHandler}>
           <label>UserName <sup>*</sup></label>
           <br/>
           <input type="text" placeholder='Username' name="username" value={username} onChange={onChangehandler}/>
           <br/>
           <label>Password <sup>*</sup>:</label>
           <br/>
           <input type="password" placeholder='password' name="password" value={password} onChange={onChangehandler}/>
           <br/>
           <label>Confirm Password <sup>*</sup>:</label>
           <br/>
           <input type="password" placeholder='Cfrm password' name="confirmPassword" value={confirmPassword} onChange={onChangehandler}/>
           <span>{password !== confirmPassword ? <span style={{"color" : "red" , "font" : "9px"}}>Password Not matching</span> : null}</span>
           <br/>
           <label>Email <sup>*</sup>:</label>
           <br/>
           <input type="Email" placeholder='Email' name="Email" value={Email} onChange={onChangehandler}/>
           <br/>
           <label>Age<sup>*</sup>:</label>
           <br/>
           <input type="number" placeholder='45' name="age" max="99" value={age} onChange={onChangehandler}/>
            
           <button type="submit" name='submit'> Submit </button>
        </form> 
    </>
  )
}

export default FormValidation