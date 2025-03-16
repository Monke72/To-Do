import { useState } from "react";
import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./../../src/App";
import dark from "./../../icons/dark.svg";
import ligth from "./../../icons/light.svg";
import ligthD from "./../../icons/ligthD.svg";
import darkD from "./../../icons/darkD.svg";

function Projects() {
  const [team, setTeam] = useState(false);
  const [projects, setProjects] = useState(false);
  const [tasks, setTasks] = useState(false);
  // const [theme, setTheme] = useState("ligth");
  const [theme, setTheme] = useContext(ThemeContext);

  const handleAnimationEnd = () => {
    return (e) => {
      if (e.target.classList.contains("deactive")) {
        e.target.classList.add("hidden");
      }
    };
  };

  return (
    <section className="projects">
      <div className="projects__top-wrapp">
        <div className="projects__top">
          <h1 className="projects__title">Projects️</h1>
          <button className="projects__top-btn">+</button>
        </div>

        <div className="projects__main">
          <div className="projects__main-team">
            <button
              className="projects__main-chapter"
              onClick={() => setTeam(!team)}
            >
              <div
                className={` projects__main-title ${
                  team ? "active" : "deactive"
                }`}
              >
                Team
              </div>
            </button>

            <div
              className={`projects__acc ${team ? "active" : "deactive"}`}
              onAnimationEnd={handleAnimationEnd()}
            >
              <p>Your not have a teame</p>
            </div>
          </div>

          <div className="projects__main-projects">
            <button
              className="projects__main-chapter"
              onClick={() => setProjects(!projects)}
            >
              <div
                className={` projects__main-title ${
                  projects ? "active" : "deactive"
                }`}
              >
                Projects
              </div>
            </button>
            <div
              className={`projects__acc ${projects ? "active" : "deactive"}`}
              onAnimationEnd={handleAnimationEnd()}
            >
              <ul className="projects__main-list">
                <li className="projects__main-item">
                  <button className="projects__main-btn">All projects</button>
                </li>
                <li className="projects__main-item">
                  <button className="projects__main-btn">Design system</button>
                </li>
                <li className="projects__main-item">
                  <button className="projects__main-btn">User flow</button>
                </li>
                <li className="projects__main-item">
                  <button className="projects__main-btn">Ux research</button>
                </li>
              </ul>
            </div>
          </div>

          <div className="projects__main-tasks">
            <button
              className="projects__main-chapter"
              onClick={() => setTasks(!tasks)}
            >
              <div
                className={` projects__main-title ${
                  tasks ? "active" : "deactive"
                }`}
              >
                Tasks
              </div>
            </button>
            <div
              className={`projects__acc ${tasks ? "active" : "deactive"}`}
              onAnimationEnd={handleAnimationEnd()}
            >
              <ul className="projects__main-list">
                <li className="projects__main-item">
                  <button className="projects__main-btn">All tasks</button>
                </li>
                <li className="projects__main-item">
                  <button className="projects__main-btn">To do</button>
                </li>
                <li className="projects__main-item">
                  <button className="projects__main-btn">In progress</button>
                </li>
                <li className="projects__main-item">
                  <button className="projects__main-btn">Done</button>
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
