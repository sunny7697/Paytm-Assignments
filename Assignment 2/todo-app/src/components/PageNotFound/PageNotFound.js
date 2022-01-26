import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  const token = useSelector((state) => state.todos.token);
  const navigate = useNavigate();
  useEffect(() => {
    if (typeof token !== "string") navigate("/login");
  }, []);

  return (
    <div className="error-page">
      <div className="error-text">
        <h1>Lost in Space</h1>
        <h3>
          <Link to="/">Click here</Link> to go home
        </h3>
      </div>
    </div>
  );
};

export default PageNotFound;
