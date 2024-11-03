import React from "react";

export default function Footer(props) {
  function handlesidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hide");
  }
  return (
    <footer>
      <div>
        <h2>{props.picName}</h2>
        <h1>{props.date}</h1>
      </div>
      <button onClick={() => handlesidebar()}>
        <i className="fa-solid fa-circle-question"></i>
      </button>
    </footer>
  );
}
