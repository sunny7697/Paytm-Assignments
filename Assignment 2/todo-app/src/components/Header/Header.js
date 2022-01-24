import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Todo App</div>
      </Link>
    </div>
  );
};

export default Header;
