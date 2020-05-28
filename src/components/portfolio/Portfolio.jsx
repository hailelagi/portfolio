import React from "react";
import Card from "./Card";
import {
  faBootstrap,
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJava,
  faJs,
  faNode,
  faNpm,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import pointing from "../../img/pointing.png";
import eyes from "../../img/eyes.png";
import science from "../../img/science.png";
import calculator from "../../img/calculator.png";
import quote from "../../img/quote-machine.png";
import markdown from "../../img/markdown.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export default function Portfolio() {
  return (
    <PortfolioWrapper>
      <header>
        <h1>Projects</h1>
        <p>
          I come from a background in science & engineering{" "}
          <img src={science} width="30px" alt="pointing emoji hand" /> and
          combine technical knowledge of software with analytical problem
          solving to build consistently efficient and scalable software to solve
          human problems. See for yourself
          <img
            src={eyes}
            width="30px"
            alt="pointing emoji hand"
            className="emoji"
          />
        </p>
        <p>
          Reach out
          <img
            src={pointing}
            width="30px"
            alt="pointing emoji hand"
            className="emoji"
          />
          <a
            href="mailto:hailelagi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            hailelagi@gmail.com
          </a>
        </p>
      </header>
      <article id="web-development">
        <h2> Web development</h2>
        <div className="stack">
          <FontAwesomeIcon icon={faHtml5} size="2x" color={"#000"} />
          <FontAwesomeIcon icon={faCss3Alt} size="2x" color={"#000"} />
          <FontAwesomeIcon icon={faJs} size="2x" color={"#000"} />
          <FontAwesomeIcon icon={faReact} size="2x" color={"#000"} />
          <FontAwesomeIcon icon={faBootstrap} size="2x" color={"#000"} />
          <FontAwesomeIcon icon={faNode} size="2x" color={"#000"} />
          <FontAwesomeIcon icon={faGitAlt} size="2x" color={"#000"} />
          <FontAwesomeIcon icon={faNpm} size="2x" color={"#000"} />
        </div>
        <div className="cards">
          <Card
            title="Calculator"
            height="300px"
            summary="A react javascript calculator"
            image={calculator}
            code="https://codepen.io/obsessedyouth/pen/wvKOLQN"
            deploy="https://codepen.io/obsessedyouth/full/wvKOLQN"
          />
          <Card
            title="Random Quote Machine"
            height="300px"
            summary="Generates programming quotes "
            image={quote}
            code="https://codepen.io/obsessedyouth/pen/yLYwJwe"
            deploy="https://codepen.io/obsessedyouth/full/yLYwJwe"
          />
          <Card
            title="Markdown Preview"
            height="300px"
            summary="A simple markdown previewer"
            image={markdown}
            code="https://codepen.io/obsessedyouth/pen/zYvbNeZ"
            deploy="https://codepen.io/obsessedyouth/full/zYvbNeZ"
          />
        </div>
      </article>
      <article id="scientific-computing">
        <h2>Scientific Computing</h2>
        <div className="stack">
          <FontAwesomeIcon icon={faPython} size="2x" color={"#000"} />
          <FontAwesomeIcon icon={faGitAlt} size="2x" color={"#000"} />
        </div>
        <div className="cards">
          <Card
            title="Project one"
            width="100px"
            height="250px"
            summary="Some placeholder text for project description"
            image=""
            tech="Technologies: Javascript, Node.js, Python"
            code="https://github.com/obsessedyouth"
            deploy="https://netlify.com"
          />
          <Card
            title="Project two"
            width="100px"
            height="250px"
            summary="Some placeholder text for project description"
            image=""
            tech="Technologies: Javascript, Node.js, Python"
            code="https://github.com/obsessedyouth"
            deploy="https://netlify.com"
          />
        </div>
      </article>
      <article id="mobile-development">
        <h2>Mobile development</h2>
        <div className="stack">
          <FontAwesomeIcon icon={faReact} size="2x" color={"#000"} />
          <FontAwesomeIcon icon={faJava} size="2x" color={"#000"} />
          <FontAwesomeIcon icon={faGitAlt} size="2x" color={"#000"} />
        </div>
        <div className="cards">
          <Card
            title="Project name"
            width="100px"
            height="250px"
            summary="Some placeholder text for project description"
            image=""
            tech="Technologies: Javascript, Node.js, Python"
            code="https://github.com/obsessedyouth"
            deploy="https://netlify.com"
          />
        </div>
      </article>
    </PortfolioWrapper>
  );
}

const PortfolioWrapper = styled.section`
  h1 {
    font-size: 200%;
  }

  header {
    color: #f4f4f4;
    background-color: #0a3055;
    text-align: center;
    font-family: Helvetica, Arial, sans-serif;
    padding-bottom: 2em;
  }

  header p {
    font-size: 150%;
    text-align: center;
    width: 80%;
    margin: auto;
    padding: 1em;
  }

  a {
    color: #a9a9a9;
  }

  .emoji {
    position: relative;
    top: 0.3rem;
    left: 0.5rem;
    margin-right: 0.5em;
  }

  .stack {
    display: flex;
    justify-content: center;
    margin: 0.2em;
  }

  .stack svg {
    margin: 0.2em;
  }

  .cards {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }
`;
