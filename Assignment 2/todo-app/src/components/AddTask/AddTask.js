import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addTodo, deleteTodo } from "../../redux/todoSlice";
import "./AddTask.css";

const AddTask = ({ dispatch }) => {
  // for editing todo task
  const path = window.location.pathname.split("/");
  const id = Number(path[2]);
  const editFormData = useSelector((state) =>
    state.todos.todos.filter((tasks) => tasks.id === id)
  )[0];

  const [formData, setFormData] = useState({
    title: id ? editFormData.title : "",
    priority: id ? editFormData.priority : "Medium",
    date: id
      ? new Date(editFormData.date)
          .toLocaleDateString("pt-br")
          .split("/")
          .reverse()
          .join("-")
      : "",
    description: id ? editFormData.description : "",
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

    // checking if the url has id in it then it means we have to edit task so we will delete first and then add
    if (path[2]) {
      dispatch(deleteTodo({ id: id }));
    }
    const formDate = new Date(formData.date);
    const dateString = `${
      monthNames[formDate.getMonth()]
    } ${formDate.getDate()}, ${formDate.getFullYear()}`;
    dispatch(addTodo({ ...formData, date: dateString }));
    alert(`Task ${id ? "updated" : "created"} Successfully`);
    navigate("/");
  };

  const token = useSelector((state) => state.todos.token);
  useEffect(() => {
    if (typeof token !== "string") navigate("/login");
  }, []);

  return (
    <div className="task-container">
      <div className="add-form-container">
        <form className="add-form" onSubmit={addTask}>
          <h1 className="heading">
            {path[1] === "edit" ? "Edit" : "Create"} Task
          </h1>
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
              maxLength={20}
              disabled={path[1] === "edit"}
              pattern="[a-zA-Z0-9\s]+"
              title="Only alphanumeric characters allowed"
              required
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
                disabled={path[1] === "edit"}
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
                min={new Date().toISOString().slice(0, 10)}
                required
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
              maxLength={100}
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
