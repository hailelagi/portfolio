import React from "react";
import { faCode, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export default function Card(props) {
  return (
    <CardWrapper>
      <img
        src={props.image}
        alt="project one"
        width={props.width}
        height={props.height}
      />
      <div>
        <span className="badge">#html5/css3</span>
        <span className="badge">#javscript</span>
        <span className="badge">#react</span>
      </div>
      <h4>{props.title}</h4>
      <p>{props.summary}</p>
      <div className="external">
        <a href={props.code} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faCodepen} size="2x" color="#444" />
        </a>
        <a href={props.deploy} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" color="#444" />
        </a>
      </div>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  & {
    display: flex;
    flex-flow: column nowrap;
    margin: 1em;
    width: 22em;
    background-color: #fff;
    border: none;
    box-shadow: 0 0 113px -50px rgba(56, 56, 56, 0.88);
    text-align: center;
    border-radius: 10px;
  }

  img {
    border-radius: 10px 10px 0 0;
    margin-bottom: 0.5em;
  }

  h4 {
    font-size: 120%;
    color: #444;
  }

  p {
    width: 80%;
    margin: auto;
    font-size: 90%;
    color: #444;
  }

  a {
    margin: 0.2em;
  }
  .badge {
    background-color: #007acc;
    margin: 0.2em;
    padding: 0.2em;
    border-radius: 8px;
    color: #fff;
    font-size: 80%;
  }
  .external {
    margin: 0.5em;
  }
`;
