import Base from "../components/Base/Base";
import Projects from "../components/Projects/Projects";

import { createContext, useState } from "react";

export const ThemeContext = createContext("");

function App() {
  const [theme, setTheme] = useState("ligth");
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div className={`wrapper ${theme}`}>
        <Projects />
        <Base />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
