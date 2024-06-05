/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import {StoreContext} from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

function PlaceOrder() {
  const {getTotalCartAmmount,getTotalCartAmmountState,deliveryFee} = useContext(StoreContext);
  
  const navigate = useNavigate();
  const amount= 500;
  const currency = "INR";
  const receiptId = "qwsaq1";
  const paymentHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/order",{
      method:"POST",
      body:JSON.stringify({amount,
        currency,
        receipt:receiptId,
      }),
      headers:{
        "Content-Type":"application/json",
      },
    });
    const order = await response.json();
    

    var options = {
      "key": "rzp_test_TuVa5tnZrVrcB3", // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      "name": "QuickBite", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler":async function (response){
          const body = {...response};
          const validateRes= await fetch("http://localhost:5000/order/validate",{
            method:"POST",
            body:JSON.stringify(body),
            headers:{
              "Content-Type":"application/json",
            }
          })
          const jsonRes = await validateRes.json();
          if(jsonRes.msg=="Success"){
              navigate("/orderPlaced");
          }  
          
        
      },
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
          "name": "Pulkit", //your customer's name
          "email": "Pulkit@gmail.com", 
          "contact": "7310608705"  //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
  var rzp1 = new Razorpay(options);
  rzp1.on('payment.failed', function (response){
          // alert(response.error.code);
          // alert(response.error.description);
          // alert(response.error.source);
          // alert(response.error.step);
          // alert(response.error.reason);
          // alert(response.error.metadata.order_id);
          // alert(response.error.metadata.payment_id);
          alert("Transaction Failed , please try again");
          
          
  });
  rzp1.open();
  e.preventDefault();
  
  };
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
            <button onClick={paymentHandler}>PROCEED TO PAYMENT</button>
           
          </div>
        </div>
    </div>
  </form>  
  )
}

export default PlaceOrder;