import React from "react";

const Form = ({
  createQuestion,
  question,
  answer,
  setQuestion,
  setAnswer,
  option,
  setOption,
}) => {
  return (
    <form onSubmit={createQuestion}>
      <input
        type="text"
        placeholder="question"
        onChange={(e) => setQuestion(e.target.value)}
        value={question}
      />
      <textarea
        className="textarea-answer"
        placeholder="answer"
        onChange={(e) => setAnswer(e.target.value)}
        value={answer}
      ></textarea>
      <select value={option} onChange={(e) => setOption(e.target.value)}>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="js">JS</option>
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="cs">CS</option>
      </select>
      <button type="submit" value="Add question" className="submit-btn">
        Add New Interview Question
      </button>
    </form>
  );
};

export default Form;
