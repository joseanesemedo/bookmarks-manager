import React, { useState } from "react";
import { Link } from "react-router-dom";

import supabase from "../supabase";
import PasswordInput from "../components/PasswordInput";
import "./Form.scss";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSignUp(e) {
    e.preventDefault();
    validateForm();

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            username: username,
          },
        },
      });

      if (!error) {
        alert("check email for verification link");
      } else {
        setErrorMessage(error.message);
      }
    } catch (error) {
      alert(error);
    }
  }

  const validateForm = () => {
    let validation = {};
    validation.username = username ? "" : "This field is required";
    validation.email = email ? "" : "Provide a valid email address";
    validation.password = password ? "" : "This field is required";

    setErrors({
      ...validation,
    });
  };

  return (
    <div className="form__container">
      <div className="form__container__wrapper">
        <h1 className="form__title">Sign up</h1>

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
        {errorMessage ? (
          <span className="input__error">{errorMessage}</span>
        ) : null}
        <span>
          Already have an account? <Link to={"/"}>Log in now</Link>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
