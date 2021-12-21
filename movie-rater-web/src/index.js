import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/login';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import { Routes, Route, BrowserRouter } from 'react-router-dom';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="movies" element={<App />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
