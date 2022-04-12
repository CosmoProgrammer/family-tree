import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import TestComponent from './components/TestComponent.js';

function App() {
  return(
    <>
      <ToastContainer autoClose={3000} hideProgressBar/>
      <Routes>
        <Route path="/" element={<TestComponent/>} />
      </Routes>
    </>
  )
}

export default App;
