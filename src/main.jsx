// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './Context/StoreContext.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-086ogqcgqulyad8k.us.auth0.com"
    clientId="vGWHTT0osjinsVXo7eJSVS2Tdrge8phL"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
    <StoreContextProvider>
      <App />
      </StoreContextProvider>
    </BrowserRouter>

  </Auth0Provider>
 
  
)
