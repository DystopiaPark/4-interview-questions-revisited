import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Option = ({
  option,
  htmls,
  css,
  js,
  react,
  cs,
  handleDelete,
  setHtml,
}) => {
  const optionDisplay = (htmlEl) => {
    <li key={htmlEl.id}>
      <span>
        <AiOutlineClose onClick={() => handleDelete(htmlEl.id)} />
      </span>
      <p>Question:</p>
      <p className="question">{htmlEl.question}</p>
      <button
        className="show"
        onClick={(e) => {
          e.target.style.display = "none";
          e.target.nextSibling.style.display = "block";
          e.target.nextSibling.nextSibling.style.display = "block";
          e.target.nextSibling.nextSibling.nextSibling.style.display = "block";
        }}
      >
        Show Answer
      </button>
      <p className="hide">Answer:</p>
      <p
        className="answer"
        onClick={(e) => {
          e.target.contentEditable = "true";
        }}
      >
        {htmlEl.answer}
      </p>
      <button
        className="hide"
        onClick={(e) => {
          e.target.style.display = "none";
          e.target.previousSibling.style.display = "none";
          e.target.previousSibling.previousSibling.style.display = "none";
          e.target.previousSibling.previousSibling.previousSibling.style.display =
            "block";
        }}
      >
        Hide Answer
      </button>
    </li>;

    return option === "html"
      ? htmls.map((htmlEl) => {
          return optionDisplay(htmlEl);
        })
      : option === "css"
      ? css.map((cssEl) => {
          return (
            <li key={cssEl.id}>
              <p>{cssEl.question}</p>
              <p>{cssEl.answer}</p>
            </li>
          );
        })
      : option === "js"
      ? js.map((jsEl) => {
          return (
            <li key={jsEl.id}>
              {jsEl.question} {jsEl.answer}
            </li>
          );
        })
      : option === "react"
      ? react.map((reactEl) => {
          return (
            <li key={reactEl.id}>
              {reactEl.question} {reactEl.answer}
            </li>
          );
        })
      : cs.map((csEl) => {
          return (
            <li key={csEl.id}>
              {csEl.question} {csEl.answer}
            </li>
          );
        });
  };
};
export default Option;
