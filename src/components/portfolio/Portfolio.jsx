import React, { Component } from "react";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Portfolio extends Component {
  render() {
    return (
      <section className="portfolio">
        <header>
          <h1>Projects</h1>
          <p>
            I come from a background in science & engineering and apply
            technical knowledge of software with analytical and excellent
            problem solving skills to build consistently efficient and scalable
            software to solve human problems. See for yourself
            <img
              src={eyes}
              width="30px"
              alt="pointing emoji hand"
              className="pointing"
            />
          </p>
          <p>
            Reach out
            <img
              src={pointing}
              width="30px"
              alt="pointing emoji hand"
              className="pointing"
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
          <div className="card-align">
            <Card
              card="card"
              title="Project one"
              width="500px"
              height="250px"
              summary="Some placeholder text for project description"
              image=""
              tech="Technologies: Javascript, Node.js, Python"
              code="https://github.com/obsessedyouth"
              deploy="https://netlify.com"
            />
            <Card
              card="card"
              title="Project two"
               width="500px" height="250px"
              summary="Some placeholder text for project description"
              image=""
              tech="Technologies: Javascript, Node.js, Python"
              code="https://github.com/obsessedyouth"
              deploy="https://netlify.com"
            />
            <Card
              card="card"
              title="Project three"
              width="500px" height="250px"
              summary="Some placeholder text for project description"
              image=""
              tech="Technologies: Javascript, Node.js, Python"
              code="https://github.com/obsessedyouth"
              deploy="https://netlify.com"
            />
          </div>
        </article>
        <article id="scientific-computing">
          <h2>Scientific Computing</h2>
          <div className="stack">
            <FontAwesomeIcon icon={faPython} size="2x" color={"#000"} />
            <FontAwesomeIcon icon={faGitAlt} size="2x" color={"#000"} />
          </div>
          <div className="card-align">
            <Card
              card="card"
              title="Project one"
              width="500px" height="250px"
              summary="Some placeholder text for project description"
              image=""
              tech="Technologies: Javascript, Node.js, Python"
              code="https://github.com/obsessedyouth"
              deploy="https://netlify.com"
            />
            <Card
              card="card"
              title="Project two"
              width="500px" height="250px"
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
          <div className="card-align">
            <Card
              card="card"
              title="Project name"
              width="500px" height="250px"
              summary="Some placeholder text for project description"
              image=""
              tech="Technologies: Javascript, Node.js, Python"
              code="https://github.com/obsessedyouth"
              deploy="https://netlify.com"
            />
          </div>
        </article>
      </section>
    );
  }
}

export default Portfolio;
