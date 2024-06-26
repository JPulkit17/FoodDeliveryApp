/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import {StoreContext} from '../../Context/StoreContext'
import { BsCart } from "react-icons/bs";
function Navbar({setShowLogin}) {
  const {getTotalCartAmmountState} = useContext(StoreContext);
  const [menu , setMenu] = useState("home");
  return (
    <div className='navbar'>
        <Link to='/'><img className='logo' src={assets.quickbite} alt="" /></Link>
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setMenu("home")}className={menu==="home"&&"active"}>home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")}className={menu==="menu"&&"active"}>menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")}className={menu==="mobile-app"&&"active"}>mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")}className={menu==="contact-us"&&"active"}>contact-us</a>
        </ul>
        <navbar className="navbar-right">
            {/* <img src={assets.search_icon} alt="" /> */}
            <div className="navbar-search-icon">
                <Link to='/cart'><BsCart size={30}/></Link>
                <div className={getTotalCartAmmountState?"dot":""}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </navbar>
    </div>
  )
}

export default Navbar