import React, { useState } from "react";
import { Link } from "react-router-dom";

import PasswordInput from "../components/PasswordInput";
import "./Form.scss";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});

  async function handleSignUp(e) {
    e.preventDefault();
    validateForm();
  }

  const validateForm = () => {
    let validation = {};
    validation.username = username ? "" : "Este campo é obrigatório";
    validation.email = email ? "" : "Este campo é obrigatório";
    validation.password = password ? "" : "Este campo é obrigatório";

    setErrors({
      ...validation,
    });
  };

  return (
    <div className="form__container">
      <div className="form__container__wrapper">
        <h1>Sign up</h1>

        <form onSubmit={handleSignUp}>
          <h2 className="input__label">Name</h2>
          <input
            type="text"
            placeholder="Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <h3 className="input__error">{errors.username && errors.username}</h3>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h3 className="input__error">{errors.password && errors.password}</h3>
          <button className="btn btn__form">Submit</button>
        </form>
        <span>
          Already have an account? <Link to={"/"}>Log in now</Link>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
