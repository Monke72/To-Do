import React from "react";
import siderLogo from "./../../icons/mainLogo.svg";
import siderBurger from "./../../icons/burger.svg";
import siderUser from "./../../icons/user.svg";
import siderSettings from "./../../icons/settings.svg";
import siderExit from "./../../icons/exit.svg";

function Sider() {
  return (
    <section className="sider">
      <div className="sider__top">
        <img className="sider__image" src={siderLogo} alt="sider logo" />
        <ul className="sider__list">
          <li className="sider__item">
            <a href="" className="sider__link">
              <img className="sider__item-image" src={siderBurger} alt="" />
            </a>
          </li>
          <li className="sider__item">
            <a href="" className="sider__link">
              <img className="sider__item-image" src={siderUser} alt="" />
            </a>
          </li>
          <li className="sider__item">
            <a href="" className="sider__link">
              <img className="sider__item-image" src={siderSettings} alt="" />
            </a>
          </li>
        </ul>
      </div>

      <div className="sider__exit">
        <button className="sider__exit-button">
          <img className="sider__item-image" src={siderExit} alt="" />
        </button>
      </div>
    </section>
  );
}

export default Sider;
