import React, { useRef, useState } from 'react';
import { Navigate,Link } from 'react-router-dom';

const RegistrationForm = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const contactRef = useRef();
    const passRef = useRef();
    const [isRegistered, setIsRegistered] = useState(false)

  const handleRegistration = (e) => {
    e.preventDefault();
    let uname = nameRef.current.value;
    let email = emailRef.current.value;
    let contact = contactRef.current.value;
    let password = passRef.current.value;
    nameRef.current.value = '';
    emailRef.current.value = '';
    contactRef.current.value ='';
    passRef.current.value = '';
    // Add your registration logic here
    const register = async() => {
        try{
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/register`,{
            method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ 
                name : uname,
                email : email,
                contact : contact,
                password : password
            }), // Send the user ID in the request body
        })
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
         
          alert('Registration Successful')
          setIsRegistered(true);
          // Do something with the response data if needed
        } catch (error) {
          console.error('Error registering user:', error);
        }
    }
    register();
  };

  return (
    <div className="container">
      <h1 className="text-secondary">The Contact Manager </h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleRegistration} className='mt-5'>
            <div className="mb-3 row mx-4">
              <label htmlFor="username" className="col-sm-4 fw-bold">Username</label>
              <div className='col-sm-8'>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter your username"
                ref = {nameRef}
                required
              />
              </div>
            </div>
            <div className="mb-3 row mx-4">
              <label htmlFor="email" className="col-sm-4 fw-bold">Email</label>
              <div className='col-sm-8'>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                ref = {emailRef}
                required
              /></div>
            </div>
            <div className="mb-3 row mx-4">
              <label htmlFor="contact" className="col-sm-4 fw-bold">Contact</label>
              <div className='col-sm-8'>
              <input
                type="text"
                className="form-control"
                id="contact"
                placeholder="Enter your contact number"
                ref = {contactRef}
                required
              />
              </div>
            </div>
            <div className="mb-3 row mx-4">
              <label htmlFor="pass" className="col-sm-4 fw-bold">Password</label>
              <div className='col-sm-8'>
              <input
                type="password"
                className="form-control"
                id="pass"
                placeholder="Enter your password"
                ref = {passRef}
                required
              />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
          <p className="mt-3 text-center">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
      {isRegistered ? <Navigate to="/login" /> : null}
    </div>
  );
};

export default RegistrationForm;
