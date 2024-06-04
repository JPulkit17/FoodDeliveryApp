/* eslint-disable no-unused-vars */
import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'
function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className="logo"src={assets.quickbite} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem pariatur laborum architecto modi facere, adipisci qui iste repellat? Id, explicabo! Itaque eveniet facere ipsam iure neque beatae provident ea quisquam?</p>
                <div className="footer-social-items">
                    <img src={assets.facebook_icon} alt="" /><img src={assets.linkedin_icon} alt="" /><img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-995-221-2121</li>
                    <li>contact@quickbite.com</li>
                </ul>
            </div>
            
        </div>
        <p className='footer-copywrite'>Copywrite 2024  &copy; Quickbite.com - All rights reserved.</p>
    </div>
  )
}

export default Footer