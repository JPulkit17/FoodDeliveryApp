/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';
import { useAuth0 } from "@auth0/auth0-react";
function FoodItem({id,name,price,description,image}) {
  const {isAuthenticated} = useAuth0();
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
  return (
    <div className='food-item'>
        <div className='food-item-image-container'>
            <img className='food-item-image' src={image} alt="" />
            {
              isAuthenticated?!cartItems[id]?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />:
              <div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
              </div>:<></>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className='food-item-price'>₹{price}</p>
        </div>
    </div>
  )
}

export default FoodItem