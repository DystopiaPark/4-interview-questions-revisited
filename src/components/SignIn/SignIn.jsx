import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/admin");
    } catch (e) {
      setError(e.message);
      console.log(e.message, error);
    }
  };

  return (
    <div className="sign-in">
      <div>
        <h2>Log In</h2>
        <p>If you have credentials to edit or add questions, log in here:</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" />
        </div>
        <div>
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <button>Sign In</button>
      </form>
      <p>
        If not, click
        <Link to="/visitor" className="link">
          {" "}
          here{" "}
        </Link>
        to view the questions.
      </p>
    </div>
  );
};

export default SignIn;
