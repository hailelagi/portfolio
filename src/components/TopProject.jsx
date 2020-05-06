import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function TopProject(props) {
  return (
    <div className="top-project">
      <picture>
        <source media="(max-width: 800px)" srcSet="/"  />
        <source media="(max-width: 500px)" srcSet="/"  />
        <img src={props.image} alt="project one" width="700px" height="500px" />
      </picture>
      <div className="aside-info">
        <h4>{props.title}</h4>
        <p>{props.summary}</p>
        <span>{props.tech}</span>
        <div className="external">
          <a href={props.code}>
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href={props.link}>
            <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopProject;
