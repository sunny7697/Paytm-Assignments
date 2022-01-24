import React, { useState } from "react";
import Todo from "../Todo/Todo";
import "./Home.css";

const Home = () => {
  const todos = [
    {
      id: 1,
      desc: "Learn React.js",
      due_date: "Jan 22, 2022",
      priority: "High",
    },
    {
      id: 2,
      desc: "Complete React.js Assignment",
      due_date: "Jan 28, 2022",
      priority: "Medium",
    },
    {
      id: 3,
      desc: "Learn Redux",
      due_date: "Jan 24, 2022",
      priority: "Low",
    },
    {
      id: 4,
      desc: "Learn Redux",
      due_date: "Jan 25, 2022",
      priority: "Low",
    },
    {
      id: 5,
      desc: "Learn Redux",
      due_date: "Jan 25, 2022",
      priority: "Low",
    },
    {
      id: 6,
      desc: "Learn Redux",
      due_date: "Jan 25, 2022",
      priority: "Low",
    },
    {
      id: 7,
      desc: "Learn Redux",
      due_date: "Jan 25, 2022",
      priority: "Low",
    },
  ];

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

  return (
    <div className="home">
      <div className="buttons">
        <button className="btn" onClick={showCheckboxHandler}>
          {boxSelected === 0 ? "Select Multiple" : "Delete Selected"}
        </button>
        <button className="btn">Add Task</button>
      </div>
      <Todo
        showCheckbox={showCheckbox}
        todos={todos}
        toggleButton={toggleButton}
      />
    </div>
  );
};

export default Home;
