import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//firebase
import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf01NChS8t5cjO_cNIDJxRur65xESG7FU",
  authDomain: "cart-bd2b2.firebaseapp.com",
  projectId: "cart-bd2b2",
  storageBucket: "cart-bd2b2.appspot.com",
  messagingSenderId: "292458377680",
  appId: "1:292458377680:web:4ade3cb4c49d0f8094c9d5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
