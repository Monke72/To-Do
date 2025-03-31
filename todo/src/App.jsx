import Base from "../components/Base/Base";
import Projects from "../components/Projects/Projects";
import { todo } from "../components/Base/Base";

import { createContext, useState } from "react";
export const ThemeContext = createContext("");

function App() {
  const [theme, setTheme] = useState("ligth");
  const [view, setView] = useState("board");
  const [todoArray, setTodoArray] = useState(todo);
  const [siderOpen, setSiderOpen] = useState(false);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div className={`wrapper ${theme}`}>
        <Projects
          todoArray={todoArray}
          setView={setView}
          view={view}
          siderOpen={siderOpen}
        />
        <Base
          todoArray={todoArray}
          setTodoArray={setTodoArray}
          view={view}
          setView={setView}
          setSiderOpen={setSiderOpen}
          siderOpen={siderOpen}
        />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
