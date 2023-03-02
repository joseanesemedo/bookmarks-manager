import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import "./Header.scss";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="header">
      <h1 className="logo">Logo</h1>
      <DarkModeSwitch
        checked={darkMode}
        onClick={() => setDarkMode(!darkMode)}
        size={50}
        sunColor={"#eab308"}
        moonColor={"#eab308"}
      />
    </header>
  );
};

export default Header;
