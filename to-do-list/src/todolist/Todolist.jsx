import React, { useState } from "react";
import "./Todolist.css";
const Todolist = () => {
  let [tasks, settasks] = useState([]);
  let [newtask, setnewtask] = useState("");
  function handletaskchange(event) {
    setnewtask(event.target.value);
  }
  let addtask = () => {
    let latesttask = newtask;
    if (latesttask.trim() !== "") {
      settasks((tasks) => [...tasks, latesttask]);
      setnewtask("");
    }
  };
  let removetask = (index) => {
    let updatedtask = tasks.filter((_, i) => i !== index);
    settasks(updatedtask);
  };
  let moveup = (index) => {
    if (index > 0) {
      let updatedtask = [...tasks];
      [updatedtask[index], updatedtask[index - 1]] = [
        updatedtask[index - 1],
        updatedtask[index],
      ];
      settasks(updatedtask);
    }
  };
  let movedown = (index) => {
    if (index < tasks.length - 1) {
      let updatedtask = [...tasks];
      [updatedtask[index], updatedtask[index + 1]] = [
        updatedtask[index + 1],
        updatedtask[index],
      ];
      settasks(updatedtask);
    }
  };
  return (
    <div className="to-do-list">
      <h2>To Do List</h2>
      <div className="input">
        <input
          type="text"
          className="inputtext"
          placeholder="Enter a Task..."
          value={newtask}
          onChange={handletaskchange}
        />
        <button className="addbutton" onClick={addtask}>
          Add Task
        </button>
      </div>
      <br />
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete" onClick={() => removetask(index)}>
              Delete
            </button>
            <button className="move-up" onClick={() => moveup(index)}>
              👆🏻
            </button>
            <button className="move-down" onClick={() => movedown(index)}>
              👇🏻
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todolist;
