import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [session, setSession] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light-mode");
  }, [darkMode]);

  if (session) {
    sessionStorage.setItem("session", JSON.stringify(session));
  }

  useEffect(() => {
    if (sessionStorage.getItem("session")) {
      let data = JSON.parse(sessionStorage.getItem("session"));
      setSession(data);
    }
  }, []);

  return (
    <div className="App">
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
    </div>
  );
}
export default App;
