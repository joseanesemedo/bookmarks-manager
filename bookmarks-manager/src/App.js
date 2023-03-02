import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Header from "./components/Header";
import supabase from "./supabase";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [session, setSession] = useState(false);
  const [tags, setTags] = useState([]);

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

  // useEffect(
  //   function () {
  //     async function getTags() {
  //       let query = supabase
  //         .from("tags")
  //         .select("*")
  //         .eq("uid", session.user.id);

  //       const { data: tags, error } = await query;

  //       if (!error) {
  //         setTags(tags);
  //         console.log(tags);
  //       } else {
  //         alert("There was a problem getting data");
  //       }
  //     }

  //     getTags();
  //   },
  //   [session]
  // );

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
