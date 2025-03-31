import { useState } from "react";
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./../../src/App";
import dark from "./../../icons/dark.svg";
import ligth from "./../../icons/light.svg";
import ligthD from "./../../icons/ligthD.svg";
import darkD from "./../../icons/darkD.svg";

function Projects({ todoArray, setView, view, siderOpen }) {
  const [team, setTeam] = useState("deactive");
  const [projects, setProjects] = useState("deactive");
  console.log(projects);

  const [tasks, setTasks] = useState("deactive");
  console.log(tasks);

  // const [theme, setTheme] = useState("ligth");
  const [theme, setTheme] = useContext(ThemeContext);

  const handleButton = () => {
    setView("add");
  };

  function animationCheck(e, state, setState) {
    if (state === "active") {
      console.log(state);

      setState("deactive");
    } else {
      setState("active");
    }
  }

  return (
    <section className={`projects ${siderOpen ? "projects__mobile-open" : ""}`}>
      <div className="projects__top-wrapp">
        <div className="projects__top">
          <h1 className="projects__title">Projects️</h1>
          <button
            className="projects__top-btn"
            onClick={handleButton}
            disabled={view === "add"}
          >
            +
          </button>
        </div>

        <div className="projects__main">
          <div className="projects__main-team">
            <button
              className="projects__main-chapter"
              onClick={(e) => animationCheck(e, team, setTeam)}
            >
              <div className={` projects__main-title ${team}`}>Team</div>
            </button>

            <div className={`projects__acc ${team}`}>
              <p>You don't have a team</p>
            </div>
          </div>

          <div className="projects__main-projects">
            <button
              className="projects__main-chapter"
              onClick={(e) => animationCheck(e, projects, setProjects)}
            >
              <div className={` projects__main-title ${projects}`}>
                Projects
              </div>
            </button>
            <div className={`projects__acc ${projects}`}>
              <ul className="projects__main-list">
                <li className="projects__main-item">
                  <button className="projects__main-btn">
                    All projects ({todoArray.length})
                  </button>
                </li>
                <li className="projects__main-item">
                  <button className="projects__main-btn no__el">
                    Design system
                  </button>
                </li>
                <li className="projects__main-item">
                  <button className="projects__main-btn no__el">
                    User flow
                  </button>
                </li>
                <li className="projects__main-item">
                  <button className="projects__main-btn no__el">
                    Ux research
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="projects__main-tasks">
            <button
              className="projects__main-chapter"
              onClick={(e) => animationCheck(e, tasks, setTasks)}
            >
              <div className={` projects__main-title ${tasks}`}>Tasks</div>
            </button>
            <div className={`projects__acc ${tasks}`}>
              <ul className="projects__main-list">
                <li className="projects__main-item">
                  <button className="projects__main-btn">
                    All tasks ({todoArray.length})
                  </button>
                </li>
                <li className="projects__main-item">
                  <button className="projects__main-btn">
                    To do (
                    {todoArray.filter((item) => item.status === "new").length})
                  </button>
                </li>
                <li className="projects__main-item">
                  <button className="projects__main-btn">
                    In progress (
                    {
                      todoArray.filter((item) => item.status === "progress")
                        .length
                    }
                    )
                  </button>
                </li>
                <li className="projects__main-item">
                  <button className="projects__main-btn">
                    Done (
                    {todoArray.filter((item) => item.status === "done").length})
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="projects__theme">
        <input
          type="checkbox"
          id="darkmode-toggle"
          className="darkmode__toggle"
        />
        <label
          className="theme__label"
          htmlFor="darkmode-toggle"
          onClick={() => setTheme(theme === "ligth" ? "dark" : "ligth")}
        >
          <span className=" ligth__btn">
            <img src={theme === "dark" ? ligthD : ligth} alt="" /> ligth
          </span>
          <span className="dark__btn">
            {" "}
            <img src={theme === "dark" ? darkD : dark} alt="" />
            dark
          </span>
        </label>
      </div>
    </section>
  );
}

export default Projects;
