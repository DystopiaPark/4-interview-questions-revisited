import React from "react";

const ShowButton = () => {
  return (
    <button
      className="show box-shadow"
      onClick={(e) => {
        e.target.style.display = "none";
        e.target.nextSibling.style.display = "block";
        e.target.nextSibling.nextSibling.style.display = "block";
        e.target.nextSibling.nextSibling.nextSibling.style.display = "block";
        e.target.parentElement.style.opacity = 1;
        e.target.parentElement.scrollTo(0, e.target.parentElement.scrollHeight);
      }}
    >
      Show Answer
    </button>
  );
};

export default ShowButton;
