import React from "react";
import { useNavigate } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import supabase from "../supabase";
import "./Header.scss";

const Header = ({ darkMode, setDarkMode, session }) => {
  let navigate = useNavigate();

  async function handleLogout() {
    await supabase.auth.signOut();
    sessionStorage.removeItem("session");
    navigate("/");
  }

  return (
    <header className="header">
      <h1 className="logo">Logo</h1>

      {session ? <button onClick={handleLogout}>Logout</button> : null}

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
