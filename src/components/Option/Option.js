import React from "react";
import HideButton from "./HideButton";
import ShowButton from "./ShowButton";
import TrashCan from "./TrashCan";

const Option = ({ handleDelete, currentArray, search, editAnswer }) => {
  return currentArray().map((el) => {
    if (
      el.question.toLowerCase().includes(search.toLowerCase()) ||
      search === ""
    ) {
      return (
        <li key={el.id} className="card" id={el.id}>
          <TrashCan el={el} handleDelete={handleDelete} />
          <p className="question">{el.question}</p>
          <ShowButton />
          <p className="hide answer answer2">Answer:</p>
          <p
            contentEditable="true"
            className="answer"
            onKeyDown={(e) => {
              editAnswer(e);
            }}
            suppressContentEditableWarning={true}
          >
            {el.answer}
          </p>
          <HideButton />
        </li>
      );
    }
    return null;
  });
};

export default Option;
