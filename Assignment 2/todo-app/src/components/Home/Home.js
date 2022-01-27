import React, { useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import "./Home.css";
// import todos from "../../todos";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteMultipleTodos, deleteTodo } from "../../redux/todoSlice";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const Home = ({ dispatch }) => {
  const todos = useSelector((state) => state.todos.todos);
  //   It checks which todo items has been selected (storing the id's in this array)
  const [checkedBoxesArray, setCheckedBoxesArray] = useState([]);

  // To decide whether checkboxes to show or not (it's handler used in button down below and passing as props in Todo.js below)
  const [showCheckbox, setShowCheckbox] = useState(false);
  // const [btnText, setBtnText] = useState(true);
  const showCheckboxHandler = () => {
    setShowCheckbox((checkbox) => !checkbox);
    showCheckbox &&
      dispatch(deleteMultipleTodos({ checkedBoxesArray: checkedBoxesArray }));
    setCheckedBoxesArray(() => []);
  };

  // deleting todo task from redux store
  const deleteTodoItem = (id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(deleteTodo({ id: id })),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const element = todos.map((todo) => (
    <Todo
      showCheckbox={showCheckbox}
      key={todo.id}
      id={todo.id}
      title={todo.title}
      priority={todo.priority}
      date={todo.date}
      description={todo.description}
      updateCheckedBoxArray={setCheckedBoxesArray}
      dispatch={dispatch}
      deleteTodoItem={deleteTodoItem}
    />
  ));

  const token = useSelector((state) => state.todos.token);
  const navigate = useNavigate();
  useEffect(() => {
    if (typeof token !== "string") navigate("/login");
  }, []);

  return (
    <div className="home">
      <div className="buttons">
        <button className="btn" onClick={showCheckboxHandler}>
          {checkedBoxesArray.length === 0
            ? "Select Multiple"
            : "Delete Selected"}
        </button>
        <Link to="/add">
          <button className="btn">Add Task</button>
        </Link>
      </div>
      <div className="todo-containers">{element}</div>
    </div>
  );
};

export default Home;
