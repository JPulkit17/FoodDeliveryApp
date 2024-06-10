/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link,useLocation } from 'react-router-dom';
import {StoreContext} from '../../Context/StoreContext'
import { BsCart } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
function Navbar() {
  const {getTotalCartAmmountState} = useContext(StoreContext);
  const [menu , setMenu] = useState("home");
  const { loginWithRedirect , user , isAuthenticated ,logout} = useAuth0();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <div className='navbar'>
        <Link to='/'><img className='logo' src={assets.quickbite} alt="" /></Link>
        <ul className='navbar-menu'>
          {isHomePage?(<><Link to='/' onClick={()=>setMenu("home")}className={menu==="home"&&"active"}>home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")}className={menu==="menu"&&"active"}>menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")}className={menu==="mobile-app"&&"active"}>mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")}className={menu==="contact-us"&&"active"}>contact-us</a></>):(<>
              <Link to='/' onClick={()=>setMenu("home")}className={menu==="home"&&"active"}>home</Link>
              <a href='#footer' onClick={()=>setMenu("contact-us")}className={menu==="contact-us"&&"active"}>contact-us</a></>)}
            
        </ul>
        <navbar className="navbar-right">
          {isAuthenticated?<div className="navbar-search-icon">
                <Link to='/cart'><BsCart size={30}/></Link>
                <div className={getTotalCartAmmountState?"dot":""}></div>
            </div>:<></>}
            
            {isAuthenticated?<button onClick={()=>logout({ logoutParams: { returnTo: window.location.origin } })}>Log out</button>:<button onClick={()=>loginWithRedirect()}>Log in</button>}
            
            {isAuthenticated?<div className='name'>
              <h2>Welcome,</h2>
              <h4><i>{user.name}</i></h4>
            </div>:<></>}
            
        </navbar>
    </div>
  )
}

export default Navbar