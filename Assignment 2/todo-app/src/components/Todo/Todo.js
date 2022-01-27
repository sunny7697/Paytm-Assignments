import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { deleteTodo } from "../../redux/todoSlice";
import ReactTooltip from "react-tooltip";
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
  deleteTodoItem,
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

  // It fills the checkedBoxArray state in Homepage that contains todo items that are checked
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

  // // deleting todo task from redux store
  // const deleteTodoItem = () => {
  //   console.log(id);
  //   dispatch(deleteTodo({ id: id }));
  // };

  // To show tooltip that tells priority
  const priorityTooltip =
    priority === "High"
      ? "High Priority"
      : priority === "Medium"
      ? "Medium Priority"
      : "Low Priority";

  return (
    <div className="todo-container">
      <div key={id} className={`todo-item ${bkg(date) + "-border"}`}>
        <div className="todo-select">
          <div className={`${showCheckbox ? "" : "hidden"}`}>
            <input
              type="checkbox"
              name="select"
              id={id}
              onChange={handleCheckBoxes}
            />
          </div>
          <div className="prio" data-tip={priorityTooltip}>
            {priority[0]}
          </div>
        </div>
        <div className="todo-text">
          <div className="todo-title">{title}</div>
          <div className="todo-desc">{description}</div>
        </div>
        <div className={`todo-footer ${bkg(date) + "-footer"}`}>
          <div className="due-date">{date}</div>
          <div className="footer-actions">
            <Link to={`/edit/${id}`}>
              <span className="edit">
                <MdEdit />
              </span>
            </Link>
            <span className="delete" onClick={() => deleteTodoItem(id)}>
              <MdDelete />
            </span>
          </div>
        </div>
      </div>
      <ReactTooltip />
    </div>
  );
};

export default Todo;
