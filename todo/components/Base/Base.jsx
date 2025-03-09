import React from "react";
import search from "./../../icons/Search.svg";
import notification from "../../icons/notifications.svg";
import date from "./../../icons/date.svg";
import profile from "./../../icons/pr.png";
import burger from "./../../icons/miniBurger.svg";

function Base() {
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
              DATE
            </div>
            <img src={profile} alt="" />
          </div>
        </div>
        <div className="base__view">
          <button className="base__view-board">
            <img src={burger} alt="" />
            Board View
          </button>
          <button className="base__view-add">
            <span>+</span>Add view
          </button>
        </div>
      </div>

      <div className="base__main">
        <div className="base__main-new base__main-todo">
          <div className="base__main-new__top">
            <p>To do (0)</p>
            <div className="add__task">
              <button className="button__add-todo button__add"></button>
              <p className="base__main-new__text">Add new task</p>
            </div>
          </div>
        </div>
        <div className="base__main-new base__main-progress">
          <div className="base__main-new__top">
            <p>In progress (0)</p>
            <div className="add__task">
              <button className="button__add-progress button__add">+</button>
              <p className="base__main-new__text">Add new task</p>
            </div>
          </div>
        </div>
        <div className="base__main-new base__main-done"></div>
        <div className="base__main-new__top">
          <p>Done (0)</p>
          <div className="add__task">
            <button className="button__add-done button__add">+</button>
            <p className="base__main-new__text">Add new task</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Base;
