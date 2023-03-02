import React, { useState } from "react";
import "./PasswordInput.scss";

const PasswordInput = ({ onChange, value }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className="password__input">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={value}
        onChange={onChange}
      />
      <button
        className="btn__icon"
        type="button"
        onClick={handleClickShowPassword}
      >
        {showPassword ? (
          <i className="icon ri-eye-off-line"></i>
        ) : (
          <i className="icon ri-eye-line"></i>
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
