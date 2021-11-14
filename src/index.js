import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route  } from 'react-router-dom'
// import './font/circular';

import Family from './page/family';
import Business from './page/business';
import FreeQuote from './page/freeQuote';
import Basic from './page/basic'
import Premium from './page/premium'
import Pro from './page/pro'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="family" element={<Family />} />
        <Route path="business" element={<Business />} />
        <Route path="freeQuote" element={<FreeQuote/>} />
        <Route path="basic" element={<Basic/>} />
        <Route path="premium" element={<Premium/>} />
        <Route path="pro" element={<Pro/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
