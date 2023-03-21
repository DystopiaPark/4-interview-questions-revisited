import React from "react";
import { HiTrash } from "react-icons/hi";

const Option = ({ option, html, css, js, react, cs, handleDelete }) => {
  return option === "html"
    ? html.map((htmlEl) => {
        return (
          <li key={htmlEl.id} className="card">
            <span>
              <HiTrash
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you want to delete this question?"
                    )
                  ) {
                    handleDelete(htmlEl.id);
                  }
                }}
              />
            </span>
            <p className="question">{htmlEl.question}</p>
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
              {htmlEl.answer}
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
      })
    : option === "css"
    ? css.map((cssEl) => {
        return (
          <li key={cssEl.id} className="card">
            <span>
              <HiTrash
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you want to delete this question?"
                    )
                  ) {
                    handleDelete(cssEl.id);
                  }
                }}
              />
            </span>
            <p className="question">{cssEl.question}</p>
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
              {cssEl.answer}
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
      })
    : option === "js"
    ? js.map((jsEl) => {
        return (
          <li key={jsEl.id} className="card">
            <span>
              <HiTrash
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you want to delete this question?"
                    )
                  ) {
                    handleDelete(jsEl.id);
                  }
                }}
              />
            </span>
            <p className="question">{jsEl.question}</p>
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
              {jsEl.answer}
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
      })
    : option === "react"
    ? react.map((reactEl) => {
        return (
          <li key={reactEl.id} className="card">
            <span>
              <HiTrash
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you want to delete this question?"
                    )
                  ) {
                    handleDelete(reactEl.id);
                  }
                }}
              />
            </span>
            <p className="question">{reactEl.question}</p>
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
              {reactEl.answer}
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
      })
    : cs.map((csEl) => {
        return (
          <li key={csEl.id} className="card">
            <span>
              <HiTrash
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you want to delete this question?"
                    )
                  ) {
                    handleDelete(csEl.id);
                  }
                }}
              />
            </span>
            <p className="question">{csEl.question}</p>
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
              {csEl.answer}
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
