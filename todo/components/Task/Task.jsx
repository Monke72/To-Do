import React from "react";
import burgerInfo from "./../../icons/more.svg";
import progress from "./../../icons/progress.png";

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

function Task() {
  return (
    <div className="task">
      <div className="task__info">
        <div className="task__info-top">
          <h4 className="task__info-top__title">Header...</h4>
          <button className="task__info-top__btn">
            <img src={burgerInfo} alt="" />
          </button>
        </div>
        <p className="task__info-text">text...</p>
      </div>
      <div className="task__progress">
        <div className="task__progress-count">
          <div className="task__progress-count__text">
            <img src={progress} alt="" />
            <p>Progress</p>
          </div>
          <div className="task__progress-count__counter">
            <span className="task__progress__done">7</span>/
            <span className="task__progress__progredd">10</span>
          </div>
        </div>
        <div className="task__progress-line"></div>
      </div>
      <div className="task__date">
        <div className="task__date-now">date</div>
      </div>
    </div>
  );
}

export default Task;
