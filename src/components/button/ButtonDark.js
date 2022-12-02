import React from "react";

function ButtonDark(prop) {
  return (
    <button
      style={{
        backgroundColor: prop.bgColor,
      }}
      className={`dark-button ${prop.className}`}
      type={`${prop?.type ? prop?.type : "button"}`}
      disabled={prop?.disabled}
    >
      {prop.text}
    </button>
  );
}

export default ButtonDark;
