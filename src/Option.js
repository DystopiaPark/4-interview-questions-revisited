import React from "react";

const Option = ({ option, htmls, css, js, react, cs }) => {
  return option === "html"
    ? htmls.map((htmlEl) => {
        return (
          <li key={htmlEl.id}>
            {htmlEl.question} {htmlEl.answer}
          </li>
        );
      })
    : option === "css"
    ? css.map((cssEl) => {
        return (
          <li key={cssEl.id}>
            {cssEl.question} {cssEl.answer}
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

export default Option;
