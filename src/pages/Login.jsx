import React, { useState } from "react";
import "../assets/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateLogin = () => {
    if (username === "admin" && password === "admin123") {
      window.location.href = "/dashboard"; // Redirect
    } else if (username === "user" && password === "user123") {
      window.location.href = "/user-dashboard";
    } else {
      setError("Account not found. Please check your username and password.");
    }
  };

  return (
    <div id="container">
      <img src="https://packetprep.com/images/login_graphics/one.png" alt="Login Icon" />
      <form>
        <h1>Login</h1>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" className="tb" placeholder="Enter your username"
            value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="tb" placeholder="Enter your password"
            value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button id="login-btn" type="button" onClick={validateLogin}>Login</button>
        <p>Don't have an account? <a href="/register" id="reg">Register now</a></p>
        {error && <div id="error-message">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
