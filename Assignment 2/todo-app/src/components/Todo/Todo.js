import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { deleteTodo } from "../../redux/todoSlice";
import "./Todo.css";

const Todo = ({
  showCheckbox,
  id,
  title,
  priority,
  date,
  description,
  updateCheckedBoxArray,
  dispatch,
}) => {
  // It checks if due_date has passed or not to change the color of todo accordingly
  const bkg = (due_date) => {
    const todayDateTime = new Date(new Date().toDateString()).getTime();
    const due_date_time = new Date(due_date).getTime();
    return due_date_time < todayDateTime
      ? "red"
      : due_date_time === todayDateTime
      ? "yellow"
      : "";
  };

  const handleCheckBoxes = (e) => {
    if (e.target.checked) {
      updateCheckedBoxArray((prevCheckedBoxes) => [
        ...prevCheckedBoxes,
        e.target.id,
      ]);
    } else {
      updateCheckedBoxArray((prevCheckedBoxes) =>
        prevCheckedBoxes.filter((box) => box !== e.target.id)
      );
    }
  };

  // deleting todo task from redux store
  const deleteTodoItem = () => {
    console.log(id);
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <div className="todo-container">
      <div key={id} className={`todo-item ${bkg(date) + "-border"}`}>
        <div className={`todo-select ${showCheckbox ? "" : "hidden"}`}>
          <input
            type="checkbox"
            name="select"
            id={id}
            onChange={handleCheckBoxes}
          />
        </div>
        <div className="todo-text">
          <div className="todo-title">{title}</div>
          <div className="todo-desc">{description}</div>
        </div>
        <div className={`todo-footer ${bkg(date) + "-footer"}`}>
          <div className="due-date">{date}</div>
          <div className="footer-actions">
            <span className="edit">
              <MdEdit />
            </span>
            <span className="delete" onClick={deleteTodoItem}>
              <MdDelete />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
