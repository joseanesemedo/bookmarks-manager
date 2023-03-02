import React, { useState } from "react";
import PasswordInput from "../components/PasswordInput";
import { Link } from "react-router-dom";

import "./Form.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div>
      <h1>Sign in</h1>
      <form action="">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="">Sign in</button>
      </form>

      {errorMessage ? <span className="">{errorMessage}</span> : null}
      <span>
        Don't have an account? <Link to={"signup"}>Create an account</Link>
      </span>
    </div>
  );
};

export default SignIn;
