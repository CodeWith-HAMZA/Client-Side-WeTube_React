import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import State from './Context/APIState';
import APIState from './Context/APIState';
import LoadingBar from "react-top-loading-bar"
import { useRef } from 'react';





const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <APIState>

    <BrowserRouter>
    
      <App />
    </BrowserRouter>
  </APIState>
);