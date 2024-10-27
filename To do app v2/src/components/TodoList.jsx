import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  let { tasksList } = props;
  return (
    <ul className="main">
      {tasksList.map((task, ind) => {
        return (
          <TodoCard key={ind} index={ind}>
            <p>{task}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
