import Base from "../components/Base/Base";
import Projects from "../components/Projects/Projects";
import Sider from "../components/Sider/Sider";

import { createContext, useState } from "react";

export const ThemeContext = createContext("");

function App() {
  const [theme, setTheme] = useState("ligth");
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div className={`wrapper ${theme}`}>
        <Sider />
        <Projects />
        <Base />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
