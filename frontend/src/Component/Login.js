import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { login, register } from '../redux/Action/Action'
function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogin=()=>{
    dispatch(login({email,password},navigate))
  }
  const handleregister=()=>{
    dispatch(register({email,password},navigate))
  }
  return (
    <div>
       <title>Slide Navbar</title>
        <link rel="stylesheet" type="text/css" href="slide navbar style.css" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet" />
        <div className="main">  	
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div className="signup">
            
              <label htmlFor="chk" aria-hidden="true">Sign up</label>
              <input type="email" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
              <input type="password" name="pswd" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
              <button onClick={handleregister}>Sign up</button>
            
          </div>
          <div className="login">
            
              <label htmlFor="chk" aria-hidden="true">Login</label>
              <input type="email" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
              <input type="password" name="pswd" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
              <button onClick={handleLogin}>Login</button>
           
          </div>
        </div>
    </div>
  )
}

export default Login
