import React, { useState } from "react";
import PasswordInput from "../components/PasswordInput";
import { Link } from "react-router-dom";

import "./Form.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    validateForm();

    console.log(email, password);
  }

  const validateForm = () => {
    let validation = {};
    validation.email = email ? "" : "Este campo é obrigatório";
    validation.password = password ? "" : "Este campo é obrigatório";

    setErrors({
      ...validation,
    });
  };

  return (
    <div className="form__container">
      <div className="form__container__wrapper">
        <h1 className="form__title">Log in</h1>
        <form onSubmit={handleLogin}>
          <h2 className="input__label">Email</h2>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="input__error">{errors.email && errors.email}</h3>
          <h2 className="input__label">Password</h2>
          <PasswordInput
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <h3 className="input__error">{errors.password && errors.password}</h3>
          <button className="btn">Sign in</button>
        </form>
        {errorMessage ? <span className="">{errorMessage}</span> : null}
        <span>
          Don't have an account? <Link to={"signup"}>Create an account</Link>
        </span>
      </div>
    </div>
  );
};

export default SignIn;
