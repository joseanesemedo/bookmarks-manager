import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    document.body.classList.toggle("light-mode");
  }, [darkMode]);

  return (
    <>
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <BrowserRouter>
        <Routes>
          <Route exact path={"/signup"} element={<SignUp />} />
          <Route
            exact
            path={"/"}
            element={<SignIn setSession={setSession} />}
          />
          {session ? (
            <Route exact path={"/home"} element={<Home session={session} />} />
          ) : null}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
