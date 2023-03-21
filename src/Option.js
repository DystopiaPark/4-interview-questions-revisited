import React from "react";
import { HiTrash } from "react-icons/hi";

const Option = ({ handleDelete, currentArray }) => {
  return currentArray().map((el) => {
    return (
      <li key={el.id} className="card">
        <span>
          <HiTrash
            onClick={() => {
              if (
                window.confirm("Are you sure you want to delete this question?")
              ) {
                handleDelete(el.id);
              }
            }}
          />
        </span>
        <p className="question">{el.question}</p>
        <button
          className="show box-shadow"
          onClick={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "block";
            e.target.nextSibling.nextSibling.style.display = "block";
            e.target.nextSibling.nextSibling.nextSibling.style.display =
              "block";
            e.target.parentElement.style.opacity = 1;
            e.target.parentElement.scrollTo(
              0,
              e.target.parentElement.scrollHeight
            );
          }}
        >
          Show Answer
        </button>
        <p className="hide answer answer2">Answer:</p>
        <p
          className="answer"
          onClick={(e) => {
            e.target.contentEditable = "true";
          }}
        >
          {el.answer}
        </p>
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
      </li>
    );
  });
};

export default Option;
