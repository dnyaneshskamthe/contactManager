import React, { useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';

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
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Registration</h2>
          <form onSubmit={handleRegistration}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter your username"
                ref = {nameRef}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                ref = {emailRef}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contact" className="form-label">Contact:</label>
              <input
                type="text"
                className="form-control"
                id="contact"
                placeholder="Enter your contact number"
                ref = {contactRef}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pass" className="form-label">Password:</label>
              <input
                type="password"
                className="form-control"
                id="pass"
                placeholder="Enter your password"
                ref = {passRef}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
      {isRegistered ? <Navigate to="/login" /> : null}
    </div>
  );
};

export default RegistrationForm;
