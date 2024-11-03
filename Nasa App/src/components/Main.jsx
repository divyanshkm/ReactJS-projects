import React from "react";

import { useState } from "react";

function Main(props) {
  return (
    <div className="imgContainer">
      <img id="bg-img" src={props.bgImg}></img>
    </div>
  );
}

export default Main;
