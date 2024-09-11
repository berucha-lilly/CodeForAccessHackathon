// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';  // This imports global styles
import App from './App';   // This is the main component of our application

// Creating a root for our React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering our App component
// React.StrictMode is a tool for highlighting potential problems in an application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
