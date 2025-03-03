// import React, { useState } from "react";

function Projects() {
  //   const [team, setTeam] = useState(false);
  return (
    <section className="projects">
      <div className="projects__top">
        <h1 className="projects__title">Projects️</h1>
        <button className="projects__top-btn">+</button>
      </div>
      <div className="projects__main">
        <div className="projects__main-team">
          <div className="projects__main-chapter">
            <div className="projects__main-title">Team</div>
            <button className="projects__main-btn">+</button>
          </div>
          <div className="projects__acc">Your not have a teame</div>
        </div>
      </div>
      <div className="projects__theme"></div>
    </section>
  );
}

export default Projects;
