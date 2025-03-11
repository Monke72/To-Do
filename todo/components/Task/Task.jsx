import React from "react";
import burgerInfo from "./../../icons/more.svg";
import progress from "./../../icons/progress.png";

function Task({ title, text, allTasks, doTasks, date }) {
  const lineProgress = ((doTasks / allTasks) * 100).toFixed();

  return (
    <div className="task">
      <div className="task__info">
        <div className="task__info-top">
          <h4 className="task__info-top__title">{title}</h4>
          <button className="task__info-top__btn">
            <img src={burgerInfo} alt="" />
          </button>
        </div>
        <p className="task__info-text">{text}</p>
      </div>
      <div className="task__progress">
        <div className="task__progress-count">
          <div className="task__progress-count__text">
            <img src={progress} alt="" />
            <p>Progress</p>
          </div>
          <div className="task__progress-count__counter">
            <span className="task__progress__done">{doTasks}</span>/
            <span className="task__progress__progredd">{allTasks}</span>
          </div>
        </div>
        <div className="task__line-wrapper">
          <div
            className={`task__progress-line ${
              lineProgress > 30 ? "line__orange" : "line__red"
            } ${lineProgress === 100 && "line__green"} `}
            style={{ width: `${lineProgress}%` }}
          ></div>
          <span className="task__progress-line__all"></span>
        </div>
      </div>
      <div className="task__date">
        <div className="task__date-now">{date}</div>
      </div>
    </div>
  );
}

export default Task;
