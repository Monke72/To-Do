import React, { useState } from "react";
import burgerInfo from "./../../icons/more.svg";
import progress from "./../../icons/progress.png";

function Task({
  title,
  text,
  allTasks,
  doTasks,
  date,
  id,
  todoArray,
  setTodoArray,
  editTask,
  setActiveCard,
  status,
}) {
  const lineProgress =
    status == "done" ? 100 : ((doTasks / allTasks) * 100).toFixed();
  const textHead = title.charAt(0).toUpperCase() + title.slice(1);

  const [show, setShow] = useState("open");

  function deleteTask(e) {
    const newTodoArray = todoArray.filter(
      (el) => el.id !== e.target.closest(".task").id
    );
    setTodoArray(newTodoArray);
  }

  function dragStartHandler() {
    setActiveCard(todoArray.findIndex((todo) => todo.id === id));
    const taskMoveDone =
      todoArray[todoArray.findIndex((todo) => todo.id === id)].status;
    console.log(taskMoveDone);
  }
  console.log(lineProgress);

  return (
    <div
      className="task"
      id={id}
      draggable={status === "done" ? false : true}
      onDragStart={dragStartHandler}
      onDragEnd={() => setActiveCard(null)}
    >
      <div className="task__info">
        <div className="task__info-top">
          <h4 className="task__info-top__title">{textHead}</h4>

          {show === "open" && (
            <button
              className="task__info-top__btn"
              onClick={() => setShow("close")}
            >
              <img src={burgerInfo} alt="" />
            </button>
          )}

          {show === "close" && (
            <div className="task__modal">
              <button
                className="task__modal-exit"
                onClick={() => setShow("open")}
              >
                X
              </button>
              <button className="task__delete" onClick={(e) => deleteTask(e)}>
                Delete Task
              </button>
              <button className="task__edit" onClick={(e) => editTask(e)}>
                Edit Task
              </button>
            </div>
          )}
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
            <span className="task__progress__done">
              {status == "done" ? allTasks : doTasks}
            </span>
            /<span className="task__progress__progredd">{allTasks}</span>
          </div>
        </div>
        <div className="task__line-wrapper">
          <div
            className={`task__progress-line ${
              lineProgress > 30 ? "line__orange" : "line__red"
            } ${lineProgress == 100 && "line__green"} `}
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
