import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToken } from "../../redux/todoSlice";
import "./Login.css";

const Login = ({ dispatch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    e.target.name === "email"
      ? setEmail(() => e.target.value)
      : setPassword(() => e.target.value);
  };

  // Fetches api token and dispatches to the redux store.
  const loginHandle = async (e) => {
    e.preventDefault();
    const response = await axios
      .get("https://run.mocky.io/v3/afa1b987-0835-4ee1-9375-6f57caa5c609")
      .catch((err) => console.log("Err: ", err));

    // console.log(response.data.token);
    dispatch(addToken(response.data.token));
    navigate("/");
  };

  const token = useSelector((state) => state.todos.token);
  const navigate = useNavigate();
  // if token is present in store then navigate to homepage
  useEffect(() => {
    if (typeof token === "string") navigate("/");
  }, []);

  return (
    <div className="login">
      <form className="form" onSubmit={loginHandle}>
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
            required
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
            required
          />
        </div>
        <button className="btn login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
