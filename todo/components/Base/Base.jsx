import React, { useEffect, useState } from "react";
import date from "./../../icons/date.svg";
import profile from "./../../icons/pr.png";
import burger from "./../../icons/miniBurger.svg";
import Task from "../Task/Task";
import lightBurger from "./../../icons/light-burger.svg";
import dateDark from "./../../icons/date-dark.svg";
import { MenuOutlined } from "@ant-design/icons";
import { CloseOutlined } from "@ant-design/icons";

import { ThemeContext } from "./../../src/App";
import { useContext } from "react";

import { InputNumber } from "antd";
import { DropArea } from "../DropArea";

const width = window.innerWidth;
console.log(width);

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

const dateNow = `${day} ${monthNames[month]} ${year}`;

export const todo = [
  {
    id: "todoOne",
    title: "ds new",
    text: "marketting",
    allTasks: 10,
    doTasks: 9,
    date: dateNow,
    status: "new",
  },
  {
    id: "todoTood",
    title: "Design newdsds",
    text: "lores",
    allTasks: 14,
    doTasks: 2,
    date: dateNow,
    status: "new",
  },
  {
    id: "todoToo",
    title: "Design newdsds",
    text: "lores",
    allTasks: 14,
    doTasks: 2,
    date: dateNow,
    status: "progress",
  },
];

function Base({
  todoArray,
  setTodoArray,
  setView,
  view,
  siderOpen,
  setSiderOpen,
}) {
  const [theme] = useContext(ThemeContext);

  console.log(theme);

  const [editEff, setEditEff] = useState(false);

  const id = `${Date.now()}-${Math.random().toString().slice(2)}`;
  //base swither

  const [editFlag, setEditFlag] = useState(false);

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
    // console.log(value);
  };

  const [error, setError] = useState(true);

  //function add new todo
  function addNewTodo(e) {
    e.preventDefault();

    const newTodo = {
      id: id,
      title: addHeaderTodo.trimLeft(),
      text: textTodo,
      allTasks: countTodo,
      doTasks: 0,
      date: dateNow,
      status: "new",
    };

    setTodoArray([...todoArray, newTodo]);
    setAddHeaderTodo("");
    setTextTodo("");
    setCountTodo(10);
  }
  useEffect(() => {
    if (addHeaderTodo.length > 0 && textTodo.length > 0) {
      setError(false);
    } else {
      setError(true);
    }
  }, [addHeaderTodo, textTodo]);

  const [errorProg, setErrorProg] = useState(true);

  useEffect(() => {
    if (addHeaderProgress.length > 0 && textProgress.length > 0) {
      setErrorProg(false);
    } else {
      setErrorProg(true);
    }
  }, [addHeaderProgress, textProgress]);
  const [editTaskM, setEditTaskM] = useState("");

  function addProgressTodo(e) {
    e.preventDefault();

    if (editFlag) {
      todoArray.forEach((el) => {
        if (el.id === editTaskM.id) {
          const task = el.id;
          const some = todoArray.find((el) => el.id === task);
          console.log(some);

          some.title = addHeaderProgress;
          some.text = textProgress;
          some.allTasks = countTasksAll;
          some.doTasks = countTask;
          if (countTasksAll === countTask) {
            some.status = "done";
          }
          console.log(some.status);

          setAddHeaderProgress("");
          setTextProgress("");
          setCountTask(1);
          setCountTasksAll(10);
          console.log(editEff);
          console.log(todoArray);

          setView("board");
          setEditEff(false);
          setEditFlag(false);
        }
      });
    } else {
      const newTodo = {
        id: editTaskM ? editTaskM.id : id,
        title: addHeaderProgress.trimLeft(),
        text: textProgress,
        allTasks: countTasksAll,
        doTasks: countTask,
        date: dateNow,
        status: `${editTaskM ? editTaskM.status : "progress"}`,
      };
      setTodoArray([...todoArray, newTodo]);

      // console.log(newTodo);
      setAddHeaderProgress("");
      setTextProgress("");
      setCountTask(1);
      setCountTasksAll(10);
    }
  }

  function editTask(e) {
    setEditFlag(true);
    setView("add");
    setEditEff(true);

    const task = e.target.closest(".task").id;
    const some = todoArray.find((el) => el.id === task);
    console.log(some);

    setEditTaskM(some);
    console.log(editTaskM);

    setAddHeaderProgress(some.title);
    setTextProgress(some.text);
    setCountTask(some.doTasks);
    setCountTasksAll(some.allTasks);
  }

  function switchBoard() {
    setView("board");
    if (editFlag) {
      setAddHeaderProgress("");
      setTextProgress("");
      setCountTask(1);
      setCountTasksAll(10);
      setEditFlag(false);
      setEditEff(false);
      console.log(view);
    }
  }

  //dnd
  const [activeCard, setActiveCard] = useState(null);

  const onDrop = (status, position) => {
    console.log(activeCard);
    if (activeCard == null || activeCard === undefined) return;

    const taskMove = todoArray[activeCard];
    console.log(taskMove.status);

    const updatedTasks = todoArray.filter(
      (task, index) => index !== activeCard
    );

    console.log(position);

    updatedTasks.splice(position, 0, {
      ...taskMove,
      status: status,
    });
    console.log(updatedTasks);
    setTodoArray(updatedTasks);
  };

  return (
    <section className="base">
      <div className="base__top">
        <div className="base__header">
          <div className="base__header-welcome">
            <h3>Welcome back , Name &#128512;</h3>
          </div>
          <div className="base__header-icons">
            <div className="base__header-icons__date">
              <img src={theme === "ligth" ? date : dateDark} alt="" />
              {`${day} ${monthNames[month]} ${year}`}
            </div>
            <img src={profile} alt="" />
            {!siderOpen ? (
              <MenuOutlined
                onClick={() => setSiderOpen((prev) => !prev)}
                className="burger__mobile"
                style={{ color: "#232323", fontSize: "22px" }}
              />
            ) : (
              <CloseOutlined
                style={{ color: "#232323", fontSize: "22px" }}
                onClick={() => setSiderOpen((prev) => !prev)}
              />
            )}
          </div>
        </div>
        <div className="base__view">
          <button
            onClick={() => switchBoard()}
            className={`base__view-board ${
              view === "board" ? "base__selected" : "dis"
            }`}
          >
            <img src={theme === "dark" ? lightBurger : burger} alt="" />
            Board View
          </button>
          <button
            onClick={() => setView("add")}
            className={`base__view-board ${
              view === "add" ? "base__selected" : "dis"
            }`}
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
                To do{" "}
                <span>
                  ({todoArray.filter((item) => item.status === "new").length})
                </span>
              </p>
              <div className="add__task">
                <button className="button__add-todo button__add">+</button>
                <p className="base__main-new__text">Add new task</p>
              </div>
            </div>
            <DropArea onDrop={() => onDrop("new", 0)} />
            <div className="base__main-tasks">
              {todoArray
                .filter((item) => item.status === "new")
                .map((el, i) => (
                  <React.Fragment key={i}>
                    <Task
                      {...el}
                      todoArray={todoArray}
                      setTodoArray={setTodoArray}
                      setView={setView}
                      editTask={editTask}
                      setActiveCard={setActiveCard}
                      activeCard={activeCard}
                      status={"new"}
                    />
                    <DropArea onDrop={() => onDrop("new", i + 1)} />
                  </React.Fragment>
                ))}
            </div>
          </div>
          <div className="base__main-new base__main-progress">
            <div className="base__main-new__top">
              <p>
                In progress{" "}
                <span>
                  (
                  {
                    todoArray.filter((item) => item.status === "progress")
                      .length
                  }
                  )
                </span>
              </p>
              <div className="add__task">
                <button className="button__add-progress button__add">+</button>
                <p className="base__main-new__text">Add new task</p>
              </div>
            </div>
            <DropArea onDrop={() => onDrop("progress", 0)} />
            <div className="base__main-tasks">
              {todoArray
                .filter((item) => item.status === "progress")
                .map((el, i) => (
                  <React.Fragment key={i}>
                    <Task
                      key={i}
                      {...el}
                      todoArray={todoArray}
                      setTodoArray={setTodoArray}
                      setView={setView}
                      editTask={editTask}
                      setActiveCard={setActiveCard}
                      activeCard={activeCard}
                      status={"progress"}
                    />
                    <DropArea onDrop={() => onDrop("progress", i + 1)} />
                  </React.Fragment>
                ))}
            </div>
          </div>

          <div className="base__main-new base__main-done">
            <div className="base__main-new__top">
              <p>
                Done
                <span>
                  ({todoArray.filter((item) => item.status === "done").length})
                </span>
              </p>
            </div>
            <DropArea onDrop={() => onDrop("done", 0)} />
            <div className="base__main-tasks">
              {todoArray
                .filter((item) => item.status === "done")
                .map((el, i) => (
                  <React.Fragment key={i}>
                    <Task
                      key={i}
                      {...el}
                      todoArray={todoArray}
                      setTodoArray={setTodoArray}
                      setView={setView}
                      editTask={editTask}
                      setActiveCard={setActiveCard}
                      activeCard={activeCard}
                      status={"done"}
                    />
                    <DropArea onDrop={() => onDrop("done", i + 1)} />
                  </React.Fragment>
                ))}
            </div>
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
                className="todos__number-input"
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
          <form
            className={`base__add-progress base__pattern-add ${
              editEff ? "animated__edit" : ""
            }`}
          >
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
                className="todos__number-input"
                min={1}
                max={editFlag ? countTasksAll : countTasksAll - 1}
                value={countTask}
                onChange={(e) => onChange(e, setCountTask)}
              />
              <span className="from">out of </span>
              <InputNumber
                className="todos__number-input"
                min={countTask + 1}
                max={15}
                value={countTasksAll}
                onChange={(e) => onChange(e, setCountTasksAll)}
              />
            </div>
            <button
              type="submit"
              className="base__add-btn__progress base__add-btn"
              onClick={(e) => addProgressTodo(e)}
              disabled={errorProg}
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
