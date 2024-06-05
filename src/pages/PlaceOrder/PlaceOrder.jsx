/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './PlaceOrder.css'
import {StoreContext} from '../../Context/StoreContext'
function PlaceOrder() {
  const {getTotalCartAmmount,getTotalCartAmmountState,deliveryFee} = useContext(StoreContext);
  return (
  <form className='place-order'>
    <div className="place-order-left">
      <p className='title'>Delivery Information</p>
      <div className="multi-fields">
        <input type="text" placeholder='First Name'/>
        <input type="text" placeholder='Last Name'/>
      </div>
      <input type="email" placeholder='Email Address'/>
      <input type="text" placeholder='Street'/>
      <div className="multi-fields">
        <input type="text" placeholder='City'/>
        <input type="text" placeholder='State'/>
      </div>
      <div className="multi-fields">
        <input type="text" placeholder='Zip Code'/>
        <input type="text" placeholder='Country'/>
      </div>
      <input type="text" placeholder='Phone'/>
    </div>
    <div className="place-order-right">
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
            <button>PROCEED TO PAYMENT</button>
          </div>
        </div>
    </div>
  </form>  
  )
}

export default PlaceOrder;