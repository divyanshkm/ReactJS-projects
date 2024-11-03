import React from "react";

export default function SideBar(props) {
  return (
    <div id="sidebar" className="sidebar">
      <h1>{props.picName}</h1>
      <div>
        <p>Description</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
