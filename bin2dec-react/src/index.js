import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/screens/App';
import NavbarCaller from './views/screens/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarCaller />
    <App />
  </React.StrictMode>
);
