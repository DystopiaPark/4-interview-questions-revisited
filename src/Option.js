import React from "react";

const Option = ({ option, htmls, css }) => {
  return option === "html"
    ? htmls.map((html, index) => {
        return (
          <li>
            {html.question} {html.answer}
          </li>
        );
      })
    : option === "css"
    ? css.map((cssEl, index) => {
        return (
          <li>
            {cssEl.question} {cssEl.answer}
          </li>
        );
      })
    : option === "html";
};

export default Option;
