import React, { useState } from "react";
import "../assets/Login.css";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log("Form Data Submitted:", formData); // Debugging
  };

  return (
    <div id="container">
      <img src="https://packetprep.com/images/login_graphics/one.png" alt="Register Icon" />
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" className="tb" placeholder="Enter your email"
            value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" className="tb" placeholder="Enter your username"
            value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" className="tb" placeholder="Enter your password"
            value={formData.password} onChange={handleChange} />
        </div>
        <button id="register-btn" type="submit">Register</button>
        <p>Already have an account? <a href="/login">Login here</a></p>
      </form>
    </div>
  );
};

export default Register;
