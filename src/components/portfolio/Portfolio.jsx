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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Portfolio extends Component {
  render() {
    return (
      <section className="portfolio">
        <header>
          <h1>Projects</h1>
          <p>
            Some introduction about the projects section Some introduction about
            Some introduction about the projects section Some introduction about
            the projects section Some introduction about the projects section
            Some introduction about the projects section Some introduction about
            asfsf sdsflsk lsfksl jsfslkd dsfdfsdfs s
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
              title="Project one"
              summary="Some placeholder text for project description"
              image=""
              tech="Technologies: Javascript, Node.js, Python"
              code="https://github.com/obsessedyouth"
              deploy="https://netlify.com"
            />
            <Card
              title="Project two"
              summary="Some placeholder text for project description"
              image=""
              tech="Technologies: Javascript, Node.js, Python"
              code="https://github.com/obsessedyouth"
              deploy="https://netlify.com"
            />
            <Card
              title="Project three"
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
              title="Project one"
              summary="Some placeholder text for project description"
              image=""
              tech="Technologies: Javascript, Node.js, Python"
              code="https://github.com/obsessedyouth"
              deploy="https://netlify.com"
            />
            <Card
              title="Project two"
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
              title="Project name"
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
