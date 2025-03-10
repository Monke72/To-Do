import React, { useState } from "react";
import search from "./../../icons/Search.svg";
import notification from "../../icons/notifications.svg";
import date from "./../../icons/date.svg";
import profile from "./../../icons/pr.png";
import burger from "./../../icons/miniBurger.svg";
import Task from "../Task/Task";

import { InputNumber } from "antd";
const onChange = (value) => {
  console.log("changed", value);
};

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
  const [view, setView] = useState("board");

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
              <Task />
              <Task />
              <Task />
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
          <div className="base__add-new">
            <div className="base__add-header"></div>
            <div className="base__add-text"></div>
          </div>

          <div className="base__add-progress">
            <div className="base__add-header">
              <p className="field">
                <label htmlFor="base__add-header">Add Header Text</label>
                <input type="text" id="base__add-header" />
              </p>
            </div>
            <div className="base__add-text">
              <p className="field">
                <label htmlFor="base__add-header">Add to-do text</label>
                <input type="text" id="base__add-header" />
              </p>
            </div>
            <div className="base__add-line">
              <h3>Выберете сколько заданий сделано и количество заданий</h3>
              <InputNumber
                min={1}
                max={10}
                defaultValue={10}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Base;
