import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reduxStore from 'redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='637481950279-f24ulv3s4f8bnq8u5b93c0u74ft59qrh.apps.googleusercontent.com'>
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);