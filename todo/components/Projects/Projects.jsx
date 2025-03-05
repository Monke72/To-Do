// import React, { useState } from "react";
import plusIcon from "./../../icons/plus.svg";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Space, Switch } from "antd";
import { useState } from "react";
import { Transition } from "react-transition-group";
import ReactDOM from "react-dom";

function Projects() {
  const [team, setTeam] = useState(false);
  const [projects, setProjects] = useState(false);
  const [tasks, setTasks] = useState(false);

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
          <button className="projects__top-btn">
            <img src={plusIcon} alt="" />
          </button>
        </div>

        <div className="projects__main">
          <div className="projects__main-team">
            <button
              className="projects__main-chapter"
              onClick={() => setTeam(!team)}
            >
              <div className="projects__main-title">Team</div>
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
              <div className="projects__main-title">Projects</div>
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
              <div className="projects__main-title">Tasks</div>
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
        {/* <div className="projects__theme-light">
          <span className="projects__theme-light__icon"></span>
          Light
        </div>
        <div className="projects__theme-dark">
          <span className="projects__theme-light__icon"></span>
          Dark
        </div> */}
        <Space direction="vertical">
          <Switch defaultChecked />
        </Space>
      </div>
    </section>
  );
}

export default Projects;
