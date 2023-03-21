//============================================================
// IMPORTS
//============================================================

import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  Timestamp,
  orderBy,
} from "firebase/firestore";
import Option from "./Option";
import "./App.css";

const App = () => {
  //============================================================
  // STATES
  //============================================================
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [option, setOption] = useState("html");
  const [html, setHtml] = useState([]);
  const [css, setCss] = useState([]);
  const [js, setJs] = useState([]);
  const [react, setReact] = useState([]);
  const [cs, setCs] = useState([]);

  //============================================================
  // DELETE TODOS
  //============================================================
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, option, id));
  };

  //============================================================
  // READ TODOS
  //============================================================
  useEffect(() => {
    const q = query(collection(db, "html"), orderBy("created_at", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let htmlArr = [];
      querySnapshot.forEach((doc) => {
        htmlArr.unshift({
          ...doc.data(),
          id: doc.id,
        });
      });
      setHtml(htmlArr);
      console.log(htmlArr);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const q = query(collection(db, "js"), orderBy("created_at", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let jsArr = [];
      querySnapshot.forEach((doc) => {
        jsArr.unshift({
          ...doc.data(),
          id: doc.id,
        });
      });
      setJs(jsArr);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const q = query(collection(db, "react"), orderBy("created_at", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let reactArr = [];
      querySnapshot.forEach((doc) => {
        reactArr.unshift({
          ...doc.data(),
          id: doc.id,
        });
      });
      setReact(reactArr);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const q = query(collection(db, "cs"), orderBy("created_at", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let csArr = [];
      querySnapshot.forEach((doc) => {
        csArr.unshift({
          ...doc.data(),
          id: doc.id,
        });
      });
      setCs(csArr);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const q = query(collection(db, "css"), orderBy("created_at", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let cssArr = [];
      querySnapshot.forEach((doc) => {
        cssArr.unshift({
          ...doc.data(),
          id: doc.id,
        });
      });
      setCss(cssArr);
    });
    return () => unsubscribe();
  }, []);

  //============================================================
  // CREATE TODOS
  //============================================================
  const createQuestion = async (e) => {
    const date = new Date();
    e.preventDefault(e);
    setQuestion("");
    setAnswer("");
    if (answer === "" || question === "") {
      alert("Please enter a valid question and answer");
      return;
    }
    await addDoc(collection(db, option), {
      answer: answer,
      question: question,
      created_at: Timestamp.fromDate(date),
    });
    setQuestion("");
    setAnswer("");
  };
  //============================================================
  // currentArrayLength
  //============================================================
  const currentArrayLength = () => {
    if (option === "html") {
      return html.length;
    } else if (option === "css") {
      return css.length;
    } else if (option === "js") {
      return js.length;
    } else if (option === "react") {
      return react.length;
    } else if (option === "cs") {
      return cs.length;
    }
  };

  //============================================================
  // currentArray
  //============================================================
  const currentArray = () => {
    if (option === "html") {
      return html;
    } else if (option === "css") {
      return css;
    } else if (option === "js") {
      return js;
    } else if (option === "react") {
      return react;
    } else if (option === "cs") {
      return cs;
    }
  };

  return (
    <div className="App">
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
          <option value="cs">CS</option>
        </select>
        <button type="submit" value="Add question" className="submit-btn">
          Add New Interview Question
        </button>
      </form>
      <p className="title box-shadow">{option} questions:</p>
      <p className="paragraph-length">
        There are currently {currentArrayLength()} questions
      </p>
      <ul>
        <Option
          option={option}
          html={html}
          css={css}
          js={js}
          react={react}
          cs={cs}
          handleDelete={handleDelete}
          currentArray={currentArray}
        />
      </ul>
    </div>
  );
};

export default App;
