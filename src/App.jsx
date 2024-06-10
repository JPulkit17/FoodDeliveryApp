/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LogInPopUp from './components/LogInPopUp/LogInPopUp';
import OrderPlaced from './pages/OrderPlaced.jsx/OrderPlaced';

function App() {
  // const [showLogin,setShowLogin] = useState(false);
  return (
    <>
    {/* {showLogin?<LogInPopUp setShowLogin={setShowLogin}/>:<></>} */}
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/orderPlaced' element={<OrderPlaced/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App;