/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './LogInPopUp.css'
import {assets} from '../../assets/assets'
function LogInPopUp({setShowLogin}) {
  const [currState,setCurrState] = useState("Sign Up")
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
          {currState==="Sign Up"&&<input type="text" placeholder='Your Name' required />}
          <input type="email" placeholder='Your Email' required  />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
        {currState==="Login"?<p>Create a new Account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:
        <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
        
        
      </form>
    </div>
  )
}

export default LogInPopUp