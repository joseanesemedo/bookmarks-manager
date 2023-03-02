import { useEffect, useState } from "react";
import "./App.css";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("light-mode");
  }, [darkMode]);

  return (
    <div>
      <DarkModeSwitch
        // style={{ height: "40px" }}
        checked={darkMode}
        onClick={() => setDarkMode(!darkMode)}
        size={30}
        sunColor={"#eab308"}
        moonColor={"#fff"}
      />
      <h1>Hello, world!</h1>
    </div>
  );
}
export default App;
