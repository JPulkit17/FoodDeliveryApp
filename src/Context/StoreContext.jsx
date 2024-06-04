/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems,setCartItems] = useState({});
    const [getTotalCartAmmountState , setGetTotalCartAmmountState] = useState(false);
    
    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
            console.log(cartItems)
        }
        else{
            setCartItems(prev=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart = (itemId) => {
        setCartItems(prev=>({...prev,[itemId]:prev[itemId]-1}))
        cartItems && setGetTotalCartAmmountState(false)
    }
    
    const getTotalCartAmmount = () => {
        let totalAmmount = 0;
        for(let item in cartItems){
            if (cartItems[item]>0) {
                setGetTotalCartAmmountState(true);
                let itemInfo = food_list.find((product)=>product._id===item)
                totalAmmount += itemInfo.price*cartItems[item]; 
            }
       
        }
        return totalAmmount;
    }
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmmount,
        getTotalCartAmmountState , 
        setGetTotalCartAmmountState
    }
    return (
       <StoreContext.Provider value={contextValue}>
            {props.children}
       </StoreContext.Provider> 
    )
}
export default StoreContextProvider