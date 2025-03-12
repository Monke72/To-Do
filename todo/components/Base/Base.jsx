import React, { useEffect, useState } from "react";
import search from "./../../icons/Search.svg";
import notification from "../../icons/notifications.svg";
import date from "./../../icons/date.svg";
import profile from "./../../icons/pr.png";
import burger from "./../../icons/miniBurger.svg";
import Task from "../Task/Task";

import { InputNumber } from "antd";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth(); // Месяц начинается с 0, поэтому прибавляем 1
const day = currentDate.getDate();

console.log(`${day}/${monthNames[month]}/${year}`);

function Base() {
  //base swither
  const [view, setView] = useState("board");
  //add component states

  //new todo
  const [addHeaderTodo, setAddHeaderTodo] = useState("");
  const [textTodo, setTextTodo] = useState("");

  //todo in progress
  const [addHeaderProgress, setAddHeaderProgress] = useState("");
  const [textProgress, setTextProgress] = useState("");

  //function for Header
  const handleHeader = (event, state) => {
    const result = event.target.value.replace(/[^a-zA-Z ]/, "");
    state(result);
  };

  //function for textArea
  const handleText = (event, state) => {
    const result = event.target.value.replace(/[^a-zA-Z0-9\/ ]/gi, "");
    state(result);
  };

  //counters

  const [countTodo, setCountTodo] = useState(10);

  const [countTask, setCountTask] = useState(1);
  const [countTasksAll, setCountTasksAll] = useState(10);

  const onChange = (value, state) => {
    state(value);
  };

  //date
  const dateNow = `${day} ${monthNames[month]} ${year}`;

  //todo arrays
  const todo = [
    {
      title: "ds new",
      text: "marketting",
      allTasks: 10,
      doTasks: 9,
      date: dateNow,
    },
    {
      title: "Design newdsds",
      text: "lores",
      allTasks: 14,
      doTasks: 2,
      date: dateNow,
    },
  ];

  const [todoArray, setTodoArray] = useState(todo);
  const [error, setError] = useState(true);
  const [headerError, setHeaderError] = useState(true);
  const [textError, setTextError] = useState(true);

  console.log(addHeaderTodo.length, textTodo, countTodo);

  //function add new todo
  function addNewTodo(e) {
    e.preventDefault();

    const newTodo = {
      title: addHeaderTodo.replace(/^ +/, ""),
      text: textTodo,
      allTasks: countTodo,
      doTasks: 0,
      date: dateNow,
    };

    setTodoArray([...todoArray, newTodo]);

    setAddHeaderTodo("");
    setTextTodo("");
    setCountTodo(10);
  }
  console.log(headerError, textError);

  useEffect(() => {
    if (!headerError && !textError) {
      setError(false);
    }
  });

  //function add new todo in progress
  // function addProgressTodo(e) {
  //   e.preventDefault();
  //   const newTodo = {
  //     title: addHeaderProgress.replace(/^ +/, ""),
  //     text: textProgress,
  //     allTasks: countTasksAll,
  //     doTasks: countTask,
  //     date: dateNow,
  //   };

  //   console.log(todo);
  //   setAddHeaderTodo("");
  //   setTextTodo("");
  //   setCountTodo(10);
  // }
  // addProgressTodo;

  return (
    <section className="base">
      <div className="base__top">
        <div className="base__header">
          <div className="base__header-welcome">
            <h3>Welcome back , Name &#128512;</h3>
          </div>
          <div className="base__header-icons">
            <img src={search} alt="" />
            <img src={notification} alt="" />
            <div className="base__header-icons__date">
              <img src={date} alt="" />
              {`${day} ${monthNames[month]} ${year}`}
            </div>
            <img src={profile} alt="" />
          </div>
        </div>
        <div className="base__view">
          <button
            onClick={() => setView("board")}
            className={`base__view-board ${
              view === "board" && "base__selected"
            }`}
          >
            <img src={burger} alt="" />
            Board View
          </button>
          <button
            onClick={() => setView("add")}
            className={`base__view-board ${view === "add" && "base__selected"}`}
          >
            <span>+</span>Add view
          </button>
        </div>
      </div>

      {view === "board" && (
        <div className="base__main">
          <div className="base__main-new base__main-todo">
            <div className="base__main-new__top">
              <p>
                To do <span>(0)</span>
              </p>
              <div className="add__task">
                <button className="button__add-todo button__add">+</button>
                <p className="base__main-new__text">Add new task</p>
              </div>
            </div>
            <div className="base__main-tasks">
              {todoArray.map((el, i) => (
                <Task key={i} {...el} />
              ))}
            </div>
          </div>
          <div className="base__main-new base__main-progress">
            <div className="base__main-new__top">
              <p>
                In progress <span>(0)</span>
              </p>
              <div className="add__task">
                <button className="button__add-progress button__add">+</button>
                <p className="base__main-new__text">Add new task</p>
              </div>
            </div>
            <div className="base__main-tasks">yy</div>
          </div>

          <div className="base__main-new base__main-done">
            <div className="base__main-new__top">
              <p>
                Done <span>(0)</span>
              </p>
              <div className="add__task">
                <button className="button__add-done button__add">+</button>
                <p className="base__main-new__text">Add new task</p>
              </div>
            </div>
            <div className="base__main-tasks">yy</div>
          </div>
        </div>
      )}

      {view === "add" && (
        <div className="base__add">
          <form className="base__add-new base__pattern-add">
            <h3 className="base__add-title">Add new To-Do</h3>
            <div className="base__add-header">
              <p className="field">
                <label className="base__add-title" htmlFor="todo__header">
                  Add Header Text
                </label>
                <input
                  value={addHeaderTodo}
                  onBlur={() =>
                    addHeaderTodo.length > 0
                      ? setHeaderError(false)
                      : setHeaderError(true)
                  }
                  onChange={(e) => handleHeader(e, setAddHeaderTodo)}
                  className="base__add-title__input"
                  type="text"
                  id="todo__header"
                />
              </p>
            </div>
            <div className="base__add-text">
              <p className="field">
                <label className="base__add-title" htmlFor="todo__text">
                  Add to-do text
                </label>
                <textarea
                  onBlur={() =>
                    textTodo.length > 0
                      ? setTextError(false)
                      : setTextError(true)
                  }
                  value={textTodo}
                  onChange={(e) => handleText(e, setTextTodo)}
                  className="base__add-title__input"
                  type="text"
                  id="todo__text"
                />
              </p>
            </div>
            <div className="base__add-line">
              <h4>Select the number of tasks from 7 to 15</h4>
              <InputNumber
                min={7}
                max={15}
                defaultValue={10}
                onChange={(e) => onChange(e, setCountTodo)}
              />
            </div>
            <button
              className="base__add-btn__todo base__add-btn"
              onClick={(e) => addNewTodo(e)}
              disabled={error}
            >
              Add new todo
            </button>
          </form>

          <form className="base__add-progress base__pattern-add">
            <h3 className="base__add-title">Add more Progress</h3>
            <div className="base__add-header">
              <p className="field">
                <label className="base__add-title" htmlFor="progress__header">
                  Add Header Text
                </label>
                <input
                  value={addHeaderProgress}
                  onChange={(e) => handleHeader(e, setAddHeaderProgress)}
                  className="base__add-title__input"
                  type="text"
                  id="progress__header"
                />
              </p>
            </div>
            <div className="base__add-text">
              <p className="field">
                <label className="base__add-title" htmlFor="progress__text">
                  Add to-do text
                </label>
                <textarea
                  value={textProgress}
                  onChange={(e) => handleText(e, setTextProgress)}
                  typeof="text"
                  className="base__add-title__input"
                  type="text"
                  id="progress__text"
                />
              </p>
            </div>
            <div className="base__add-line">
              <h4>
                Select how many tasks have been completed , and the number of
                tasks
              </h4>
              <InputNumber
                min={1}
                max={countTasksAll}
                defaultValue={1}
                value={countTask}
                onChange={(e) => onChange(e, setCountTask)}
              />
              <span className="from">out of </span>
              <InputNumber
                min={7}
                max={15}
                value={countTasksAll}
                defaultValue={10}
                onChange={(e) => onChange(e, setCountTasksAll)}
              />
            </div>
            <button
              type="submit"
              className="base__add-btn__progress base__add-btn"
            >
              Add task in progress
            </button>
          </form>
        </div>
      )}
    </section>
  );
}

export default Base;
