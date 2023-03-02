import { useEffect, useState } from "react";
import "./App.css";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}

      <DarkModeSwitch
        // style={{ height: "40px" }}
        checked={theme}
        onClick={toggleTheme}
        size={30}
        sunColor={"#eab308"}
      />
      <h1>Hello, world!</h1>
    </div>
  );
}
export default App;
