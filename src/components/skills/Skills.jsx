import React from "react";
import Skill from "./Skill";
import ProgressBar from "./ProgressBar";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Professional skills</h2>
      <div className="top-skills">
        <Skill
          mastery="70"
          offset="0"
          skill={"Python / SciPy"}
          exp="5 months"
        />
        <Skill
          mastery="75"
          offset="0"
          skill="Javascript / React"
          exp="7 months"
        />
        <Skill
          mastery="20"
          offset="0"
          skill={"Node.js / Express"}
          exp="1 month"
        />
      </div>
      <h3>Other skills</h3>
      <div className="other-skills">
        <ProgressBar
          percentage="65"
          skill="Git"
          increment="15"
          color="#648fcf"
          progress="progress-bar git"
        />
        <ProgressBar
          percentage="80"
          skill="HTML5/CSS3"
          increment="18"
          color="#648fcf"
          progress="progress-bar html-css"
        />
        <ProgressBar
          percentage="20"
          skill="Jest"
          increment="4"
          color="#648fcf"
          progress="progress-bar jest"
        />
        <ProgressBar
          percentage="25"
          skill="Redux"
          increment="5"
          color="#648fcf"
          progress="progress-bar redux"
        />
        <ProgressBar
          percentage="30"
          skill="React-native"
          increment="6"
          color="#648fcf"
          progress="progress-bar react-native"
        />
        <ProgressBar
          percentage="55"
          skill="Bootstrap"
          increment="12"
          color="#648fcf"
          progress="progress-bar bootstrap"
        />
        <ProgressBar
          percentage="20"
          skill="Pytest"
          increment="4"
          color="#648fcf"
          progress="progress-bar pytest"
        />
        <ProgressBar
          percentage="25"
          skill="Numpy"
          increment="5"
          color="#648fcf"
          progress="progress-bar numpy"
        />

        <ProgressBar
          percentage="75"
          skill="Figma"
          increment="17"
          color="#648fcf"
          progress="progress-bar figma"
        />
      </div>
    </section>
  );
}

export default Skills;
