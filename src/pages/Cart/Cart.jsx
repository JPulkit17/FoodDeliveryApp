/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './Cart.css'
import {StoreContext} from '../../Context/StoreContext'
import { Link } from 'react-router-dom';
function Cart() {
  const{cartItems,food_list,removeFromCart,getTotalCartAmmount,getTotalCartAmmountState , 
    setGetTotalCartAmmountState}=useContext(StoreContext);
    const deliveryFee = 50;
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0)
            {
              return (
                <div key={index} className='cart-items-container'>
                <div  className="cart-items-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>₹{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>₹{item.price*cartItems[item._id]}</p>
                    <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
                </div> 
                <hr />
                </div>
              )
            }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>₹{getTotalCartAmmount()}</p>
            </div>
            <hr />
            {getTotalCartAmmountState?<><div style={{ display: 'flex', justifyContent: 'space-between', color: '#555' }} className="cart-total-details">
                <p>Delivery fee</p>
                <p>₹{deliveryFee}</p>
                
            </div><hr /></>:<></>}
            
            
            <div className="cart-total-details">
              <b>Total</b>
              {getTotalCartAmmountState?<b>₹{getTotalCartAmmount()+deliveryFee}</b>:<b>{0}</b>}
              
            </div>
            <Link to='/order'><button>PROCEED TO CHECKOUT</button></Link>
          </div>
        </div>
        <div className="cart-promocode">
            <div>
              <p>If you have a promocode enter here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Cart;