import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    document.body.classList.toggle("light-mode");
  }, [darkMode]);

  return (
    <div>
      <DarkModeSwitch
        checked={darkMode}
        onClick={() => setDarkMode(!darkMode)}
        size={50}
        sunColor={"#eab308"}
        moonColor={"#fff"}
      />

      <BrowserRouter>
        <Routes>
          <Route exact path={"/signup"} element={<SignUp />} />
          <Route exact path={"/"} element={<SignIn />} />
          {session ? (
            <Route exact path={"/home"} element={<Home session={session} />} />
          ) : null}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
