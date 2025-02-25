import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'slick-carousel/slick/slick.css';

import './index.css';
import App from './App';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { NavHeightProvider } from './context/NavContext';
import { UserStateProvider } from './context/UserStateContext';

const clientId = 'client id';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <GoogleOAuthProvider clientId={clientId}>
         <NavHeightProvider>
            <UserStateProvider> {/* temporary code */}
               <App />
            </UserStateProvider> {/* temporary code */}
         </NavHeightProvider>
     </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
