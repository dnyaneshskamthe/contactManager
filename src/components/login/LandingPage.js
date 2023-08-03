import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import Register from './Register';
import Home from '../contactScreens/Home';

const LandingPage = () => {
  return (
    <div className='container container-fluide'>
      <div className=''>
        <h2 className='text-success'>Welcome to the contact manager</h2>
      </div>
      <Routes>
      <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path ="/register" element={<Register/>}/>
        <Route path ="/home" element={<Home/>}/>
      </Routes>

      <div></div>
      <div>
      </div>
    </div>
  );
};

export default LandingPage;
