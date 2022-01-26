import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const tokenType = typeof useSelector((state) => state.todos.token);

  const logoutHandler = () => {
    localStorage.clear();
    // after reloading, it will automatically go to the login page as localStorage is cleared.
    window.location.reload(false);
  };

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Todo App</div>
      </Link>
      {tokenType === "string" && (
        <button onClick={logoutHandler} className="btn logout-btn">
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
