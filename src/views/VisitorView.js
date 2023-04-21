//============================================================
// IMPORTS
//============================================================

import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import "../App.css";
import Search from "../components/Search/Search";
import ShowButton from "../components/Option/ShowButton";
import HideButton from "../components/Option/HideButton";

const VisitorView = () => {
  //============================================================
  // STATES
  //============================================================

  let optionStorage = localStorage.getItem("optionVisitor");

  const [option, setOption] = useState(optionStorage ? optionStorage : "html");
  const [search, setSearch] = useState("");
  const [html, setHtml] = useState([]);
  const [css, setCss] = useState([]);
  const [js, setJs] = useState([]);
  const [react, setReact] = useState([]);
  const [cs, setCs] = useState([]);
  const [angular, setAngular] = useState([]);

  // LOCAL STORAGE

  localStorage.setItem("optionVisitor", option);

  //============================================================
  // READ QUESTIONS
  //============================================================

  useEffect(() => {
    const q = query(collection(db, option), orderBy("created_at", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let arr = [];
      querySnapshot.forEach((doc) => {
        arr.unshift({
          ...doc.data(),
          id: doc.id,
        });
      });
      if (option === "html") {
        setHtml(arr);
      } else if (option === "css") {
        setCss(arr);
      } else if (option === "js") {
        setJs(arr);
      } else if (option === "react") {
        setReact(arr);
      } else if (option === "cs") {
        setCs(arr);
      } else if (option === "angular") {
        setAngular(arr);
      }
    });
    return () => unsubscribe();
  }, [option]);

  //============================================================
  // currentArray
  //============================================================

  const currentArray = () => {
    if (optionStorage === "html") {
      return html;
    } else if (optionStorage === "css") {
      return css;
    } else if (optionStorage === "js") {
      return js;
    } else if (optionStorage === "react") {
      return react;
    } else if (optionStorage === "cs") {
      return cs;
    } else if (optionStorage === "angular") {
      return angular;
    }
  };

  return (
    <div className="App">
      <select
        id="select-visitor"
        value={option}
        onChange={(e) => setOption(e.target.value)}
      >
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="js">JS</option>
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="cs">CS</option>
      </select>
      <p className="title box-shadow">{option} questions:</p>
      <p className="paragraph-length">
        There are in total {currentArray().length} questions in{" "}
        {option.toUpperCase()}
      </p>
      <Search search={search} setSearch={setSearch} />
      <ul>
        {currentArray().map((el) => {
          if (el.question.toLowerCase().includes(search.toLowerCase())) {
            return (
              <li key={el.id} className="card" id={el.id}>
                <p className="question">{el.question}</p>
                <ShowButton />
                <p className="hide answer answer2">Answer:</p>
                <p className="answer">{el.answer}</p>
                <HideButton />
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default VisitorView;
