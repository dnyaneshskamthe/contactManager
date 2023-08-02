import React, { useRef, useState } from 'react';
import { Link , Navigate} from 'react-router-dom';

const LoginForm = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [isLoggedIn , setIsLoggedIn] = useState(false)

    const handleLogin = (e) => {
      e.preventDefault();
      // Add your login logic here
      let email = emailRef.current.value;
      let password = passwordRef.current.value;
      emailRef.current.value = '';
      passwordRef.current.value = '';
      const login = async () =>{
        try {
          let response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/login`,{
            method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ 
                email : email,
                password : password
            }),
          })
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
         
          alert('Login Successful')
          setIsLoggedIn(true);
        } catch (error) {
          console.error('Error registering user:', error);          
        }
      }
      login();
    };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleLogin}>
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
              <label htmlFor="password" className="form-label">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                ref = {passwordRef}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
          <p className="mt-3 text-center">
            New user? <Link to="/register">Register here</Link>
          </p>
          {isLoggedIn ? <Navigate to="/home" /> : null}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;