import React from "react";
import { useContext } from "react";
import { deleteContext } from "../App";

export default function TodoCard(props) {
  let { children } = props;
  const { index } = props;

  const handleDelete = useContext(deleteContext);

  return (
    <li className="todoItem">
      {children}
      <div className="actionContainer">
        <button>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDelete(index)}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
