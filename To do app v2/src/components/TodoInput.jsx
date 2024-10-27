import React, { useState } from "react";

export default function TodoInput(props) {
  const { handleAdd } = props;
  const [newTask, setNewTask] = useState("");
  return (
    <div>
      <input
        value={newTask}
        placeholder="Enter Todo..."
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          handleAdd(newTask);
          setNewTask("");
        }}
      >
        ADD
      </button>
    </div>
  );
}
