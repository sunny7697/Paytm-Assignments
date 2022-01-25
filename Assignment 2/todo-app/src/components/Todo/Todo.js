import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { deleteTodo } from "../../redux/todoSlice";
import "./Todo.css";

const Todo = ({ showCheckbox, todos, toggleButton, dispatch }) => {
  // It checks if due_date has passed or not to change the color of todo accordingly
  const bkg = (due_date) => {
    const todayDateTime = new Date(new Date().toLocaleDateString()).getTime();
    const due_date_time = new Date(due_date).getTime();
    return due_date_time < todayDateTime
      ? "red"
      : due_date_time === todayDateTime
      ? "yellow"
      : "";
  };

  //   It checks which todo items has been selected (storing the id's in this array)
  const [checkedBoxes, setCheckedBoxes] = useState([]);
  const handleCheckBoxes = (e) => {
    if (e.target.checked) {
      setCheckedBoxes((prevCheckedBoxes) => [...prevCheckedBoxes, e.target.id]);
    } else {
      setCheckedBoxes(checkedBoxes.filter((box) => box !== e.target.id));
    }
  };

  //   setting Home.js boxSelected state to change the text on button in Home.js
  toggleButton(checkedBoxes.length);

  // deleting todo task from redux store
  const deleteTodoItem = (todo) => {
    console.log(todo);
    // dispatch(deleteTodo({ id: e.target.id }));
  };

  return (
    <div className="todo-container">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`todo-item ${bkg(todo.date) + "-border"}`}
        >
          <div className={`todo-select ${showCheckbox ? "" : "hidden"}`}>
            <input
              type="checkbox"
              name="select"
              id={todo.id}
              onChange={handleCheckBoxes}
              onClick={toggleButton}
            />
          </div>
          <div className="todo-text">
            <div className="todo-title">{todo.title}</div>
            <div className="todo-desc">{todo.description}</div>
          </div>
          <div className={`todo-footer ${bkg(todo.date) + "-footer"}`}>
            <div className="due-date">{todo.date}</div>
            <div className="footer-actions">
              <span className="edit">
                <MdEdit />
              </span>
              <span className="delete" id={todo.id} onClick={deleteTodoItem}>
                <MdDelete id={todo.id} />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
