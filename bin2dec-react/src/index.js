import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NavbarCaller from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarCaller />
    <App />
  </React.StrictMode>
);
