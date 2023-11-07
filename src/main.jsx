import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
     domain='dev-n038v7cf0ytrpp4v.us.auth0.com'
     clientId='R38vh1s7ocGdNx1s38SYgqvYYj6qrBd9'
     authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </Auth0Provider>
   </React.StrictMode>
)
