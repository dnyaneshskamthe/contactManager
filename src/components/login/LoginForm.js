import React, { useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    // Add your login logic here
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    emailRef.current.value = "";
    passwordRef.current.value = "";
    try {
      let response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/v1/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      if (!response.ok) {
        console.log(response);
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      // Store the token in the local storage
      localStorage.setItem("token", data.token);
      alert("Login Successful");
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="card border border-0 mt-4">
      <h1 className="text-secondary">The Contact Manager </h1>
      <div className="row  justify-content-center ">
        <div className="col-md-6">
          <form onSubmit={handleLogin}>
            <div className="mb-3 row mx-4">
              <label htmlFor="email" className="col-sm-4">
                Email
              </label>
              <div className="col-sm-8">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                ref={emailRef}
                required
              />
              </div>
            </div>
            <div className="mb-3 row mx-4">
              <label htmlFor="password" className="col-sm-4">
                Password
              </label>
              <div className="col-sm-8">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                ref={passwordRef}
                required
              />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
          <p className="mt-3 text-center">
            New user? <Link to="/register">Register here</Link>
          </p>
          {isLoggedIn && <Navigate to="/home" />}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
