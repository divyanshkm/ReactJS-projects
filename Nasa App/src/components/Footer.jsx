import React from "react";

export default function Footer() {
  function handlesidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hide");
  }
  return (
    <footer>
      <div>
        <h2>Picture name</h2>
        <h1>APOD Project</h1>
      </div>
      <button onClick={() => handlesidebar()}>
        <i className="fa-solid fa-circle-question"></i>
      </button>
    </footer>
  );
}
