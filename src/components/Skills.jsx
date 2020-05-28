import React from "react";
import javascript from "../img/javascript.png";
import nodejs from "../img/nodejs.png";
import python from "../img/python.png";
import styled from "styled-components";

export default function Skills() {
  return (
    <SkillsWrapper>
      <h2>Professional skills</h2>

      <h3>Preferred Technologies</h3>
      <div className="top-skills">
        <img src={javascript} alt="javascript" />
        <img src={nodejs} alt="node js" />
        <img src={python} alt="python" />
      </div>
      <div className="other-skills">
        <div>
          <h3>Languages</h3>
          <p>HTML5/CSS3</p>
          <p>Javascript (ES6+)</p>
          <p>Python 3</p>
        </div>

        <div>
          <h3>Libraries & Frameworks</h3>
          <p>React</p>
          <p>Redux</p>
          <p>Jest</p>
          <p>Node.js</p>
          <p>React-native</p>
          <p>Bootstrap</p>
          <p>Pytest</p>
          <p>Numpy</p>
          <p>Matplotlib</p>
          <p>SciPy</p>
        </div>

        <div>
          <h3>Tools</h3>
          <p>Git & Github</p>
          <p>Chrome DevTools</p>
          <p>Figma</p>
        </div>
      </div>
    </SkillsWrapper>
  );
}

const SkillsWrapper = styled.div`
  & {
    background-color: #fff;
    margin: auto;
    border-radius: 8px;
    padding-bottom: 1em;
  }

  .top-skills {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
  }

  .other-skills {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: auto;
    text-align: center;
  }
`;
