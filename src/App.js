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
  updateDoc,
} from "firebase/firestore";
import Option from "./components/Option/Option";
import "./App.css";
import Form from "./components/Form/Form";
import Search from "./components/Search/Search";
import SignIn from "./components/Auth/SignIn";
import AuthDetails from "./components/Auth/AuthDetails";

const App = () => {
  //============================================================
  // STATES
  //============================================================

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [option, setOption] = useState("html");
  const [search, setSearch] = useState("");
  const [html, setHtml] = useState([]);
  const [css, setCss] = useState([]);
  const [js, setJs] = useState([]);
  const [react, setReact] = useState([]);
  const [cs, setCs] = useState([]);

  //============================================================
  // DELETE QUESTIONS
  //============================================================

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, option, id));
  };

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
      }
    });
    return () => unsubscribe();
  }, [option]);

  //============================================================
  // CREATE QUESTIONS
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
  // UPDATE/EDIT QUESTIONS
  //============================================================

  const editAnswer = async (e) => {
    if (e.key === "Enter") {
      console.log("kvak");
      doc.id = e.target.parentElement.id;
      console.log(e.target.textContent);
      console.log(doc.id);
      console.log(e.target.parentElement.id);
      console.log("kvak2");
      await updateDoc(doc(db, option, doc.id), {
        answer: e.target.textContent,
      });
      console.log("kvak3");
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
      <SignIn />
      <AuthDetails />
      <Form
        createQuestion={createQuestion}
        question={question}
        answer={answer}
        setQuestion={setQuestion}
        setAnswer={setAnswer}
        option={option}
        setOption={setOption}
      />
      <p className="title box-shadow">{option} questions:</p>
      <p className="paragraph-length">
        There are currently {currentArray().length} questions
      </p>
      <Search search={search} setSearch={setSearch} />
      <ul>
        <Option
          handleDelete={handleDelete}
          currentArray={currentArray}
          search={search}
          editAnswer={editAnswer}
        />
      </ul>
    </div>
  );
};

export default App;
