import React from "react";
import "./skills.css";

const Skills = () => {
  const handleInput = () => {};

  return (
    <div className="skills" id="services">
      <div className="skills__container">
        <div className="skills__list">
          <div>
            <h1>SKILLS</h1>
          </div>
          <h2>HTML</h2>
          <div className="progress-bar">
            <div className="html">
              {" "}
              <span>90%</span>
            </div>
          </div>
          <h2>CSS</h2>
          <div className="progress-bar">
            <div className="css">
              {" "}
              <span>87%</span>
            </div>
          </div>
          <h2>javaScript</h2>
          <div className="progress-bar">
            <div className="js">
              {" "}
              <span>77%</span>
            </div>
          </div>
          <h2>REACT_JS</h2>
          <div className="progress-bar">
            <div className="react">
              {" "}
              <span>80%</span>
            </div>
          </div>
          <h2>NODE_JS</h2>
          <div className="progress-bar">
            <div className="node">
              {" "}
              <span>76%</span>
            </div>
          </div>
          <h2>MONGODB</h2>
          <div className="progress-bar">
            <div className="mongodb">
              {" "}
              <span>85%</span>
            </div>
          </div>
        </div>
        <div className="skills__experience">
          <h3>MY EXPERIENCE</h3>
          <div>
            <h4>WEB DEVELOPER</h4>
            <p>
              I was responsible for all the in-house and client-based web
              development assignments. I take pride in having helped the best of
              clients and getting maximum ratings for the company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
    