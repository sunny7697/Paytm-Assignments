import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addTodo } from "../../redux/todoSlice";
import "./AddTask.css";

const AddTask = ({ dispatch }) => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  // adding Task in redux store and redirecting to homepage back
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const navigate = useNavigate();
  const addTask = (e) => {
    e.preventDefault();
    const formDate = new Date(formData.date);
    const dateString = `${
      monthNames[formDate.getMonth()]
    } ${formDate.getDate()}, ${formDate.getFullYear()}`;
    dispatch(addTodo({ ...formData, date: dateString }));
    navigate("/");
  };

  return (
    <div className="task-container">
      <div className="add-form-container">
        <form className="add-form" onSubmit={addTask}>
          <h1 className="heading">Create Task</h1>
          <div className="form-field">
            {/* Title */}
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-field-group">
            <div className="form-field">
              {/* Priority */}
              <label htmlFor="priority">Priority</label>
              <select
                name="priority"
                id="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="form-field">
              {/* Date */}
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-field">
            {/* Description */}
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              className="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="button-field">
            <button className="btn save-btn">Save</button>
            <Link to="/">
              <button type="button" className="btn cancel-btn">
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
