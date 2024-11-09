import React from "react";

function Button(props) {
  const { text, func } = props;
  return (
    <button
      className="px-8 mx-auto py-4 rounded-md border-[2px]  bg-slate-950 blueShadow border-blue-400 border-solid duration-200"
      onClick={func}
    >
      <p>{text}</p>
    </button>
  );
}

export default Button;
