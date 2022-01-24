import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
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
