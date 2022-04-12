import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import LoginController from './components/login/LoginController.js';

function App() {
  return(
    <>
      <ToastContainer autoClose={3000} hideProgressBar/>
      <Routes>
        <Route path="/" element={<LoginController/>} />
      </Routes>
    </>
  )
}

export default App;
