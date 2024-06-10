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
                <p>Delivering happiness one meal at a time. At QuickBite, we are committed to providing you with the freshest ingredients, the most delicious recipes, and the fastest delivery service. Thank you for choosing us to satisfy your cravings. Your satisfaction is our top priority.</p>
                <p>Follow us on social media for exclusive offers and the latest updates!</p>
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