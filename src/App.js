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
  // STATES
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [option, setOption] = useState("html");
  const [htmls, setHtml] = useState([]);
  const [css, setCss] = useState([]);
  const [js, setJs] = useState([]);
  const [react, setReact] = useState([]);
  const [cs, setCs] = useState([]);

  // DELETE TODOS

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "htmls", id));
  };

  // READ TODOS

  useEffect(() => {
    const q = query(collection(db, "htmls"), orderBy("created_at", "desc"));
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
    const q = query(collection(db, "js"));
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
    const q = query(collection(db, "react"));
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
    const q = query(collection(db, "cs"));
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
    const q = query(collection(db, "css"));
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

  // CREATE TODOS
  const createQuestion = async (e) => {
    const date = new Date();
    e.preventDefault(e);
    setQuestion("");
    setAnswer("");
    if (answer === "" || question === "") {
      alert("Please enter a valid question and answer");
      return;
    }
    if (option === "html") {
      await addDoc(collection(db, "htmls"), {
        answer: answer,
        question: question,
        created_at: Timestamp.fromDate(date),
      });
    } else if (option === "css") {
      await addDoc(collection(db, "css"), {
        answer: answer,
        question: question,
      });
    } else if (option === "js") {
      await addDoc(collection(db, "js"), {
        answer: answer,
        question: question,
      });
    } else if (option === "react") {
      await addDoc(collection(db, "react"), {
        answer: answer,
        question: question,
      });
    } else if (option === "cs") {
      await addDoc(collection(db, "cs"), {
        answer: answer,
        question: question,
      });
    }

    setQuestion("");
    setAnswer("");
  };

  return (
    <div className="App">
      <form onSubmit={createQuestion}>
        <input
          placeholder="question"
          onChange={(e) => setQuestion(e.target.value)}
          value={question}
        />
        <input
          placeholder="answer"
          onChange={(e) => setAnswer(e.target.value)}
          value={answer}
        />
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
      <ul>
        <Option
          option={option}
          htmls={htmls}
          css={css}
          js={js}
          react={react}
          cs={cs}
          handleDelete={handleDelete}
        />
      </ul>
    </div>
  );
};

export default App;
