import React from "react";

const HideButton = () => {
  return (
    <button
      className="hide box-shadow"
      onClick={(e) => {
        e.target.style.display = "none";
        e.target.previousSibling.style.display = "none";
        e.target.previousSibling.previousSibling.style.display = "none";
        e.target.previousSibling.previousSibling.previousSibling.style.display =
          "flex";
      }}
    >
      Hide Answer
    </button>
  );
};

export default HideButton;
