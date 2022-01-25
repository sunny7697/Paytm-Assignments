import React, { useState } from "react";
import Todo from "../Todo/Todo";
import "./Home.css";
// import todos from "../../todos";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = ({ dispatch }) => {
  // To decide whether checkboxes to show or not (it's handler used in button down below and passing as props in Todo.js below)
  const [showCheckbox, setShowCheckbox] = useState(false);
  const showCheckboxHandler = () => {
    setShowCheckbox((checkbox) => !checkbox);
  };

  // setting number of todo items selected
  const [boxSelected, setBoxSelected] = useState(0);
  const toggleButton = (len) => {
    setTimeout(() => setBoxSelected(len), 0);
  };

  const todos = useSelector((state) => state.todos);

  return (
    <div className="home">
      <div className="buttons">
        <button className="btn" onClick={showCheckboxHandler}>
          {boxSelected === 0 ? "Select Multiple" : "Delete Selected"}
        </button>
        <Link to="/add">
          <button className="btn">Add Task</button>
        </Link>
      </div>
      <Todo
        showCheckbox={showCheckbox}
        todos={todos}
        toggleButton={toggleButton}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Home;
