import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import Register from './Register';
import Home from '../contactScreens/Home';

const LandingPage = () => {
  return (
    <div className='container container-fluide'>
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
