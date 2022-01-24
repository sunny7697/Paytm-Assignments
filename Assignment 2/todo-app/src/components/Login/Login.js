import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    e.target.name === "email"
      ? setEmail(() => e.target.value)
      : setPassword(() => e.target.value);
  };
  return (
    <div className="login">
      <form className="form">
        <h2 className="form-heading">Login to Todo App</h2>
        <div className="heading-bottom"></div>
        <div className="email-container">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            className="email"
            name="email"
            onChange={handleInputChange}
            value={email}
          />
        </div>
        <div className="password-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="password"
            name="password"
            onChange={handleInputChange}
            value={password}
          />
        </div>
        <button className="btn login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
