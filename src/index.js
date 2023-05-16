import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ToastContainer } from 'react-toastify';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer position="bottom-right" autoClose={2500} theme="colored" />
  </React.StrictMode>
);
