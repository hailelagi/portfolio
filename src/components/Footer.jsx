import React from "react";
import {
  faDribbble,
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../img/profile.png";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="summary">
        <h2>Get in Touch</h2>
        <img src={profile} alt={"profile"} />
        <p>
          I'm not currently looking for work but I am open to opportunities
          involving collaboration on interesting projects.
        </p>
        <ul className="interests">
          <li>
            <FontAwesomeIcon
              icon={faCheck}
              color="#9ACD32"
              size="sm"
              style={{ marginRight: "0.5em" }}
            />
            Web development using the MERN stack
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCheck}
              color="#9ACD32"
              size="sm"
              style={{ marginRight: "0.5em" }}
            />
            Simulation based optimization problems using python
            (sciPy,numpy,matplotlib etc)
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCheck}
              color="#9ACD32"
              size="sm"
              style={{ marginRight: "0.5em" }}
            />
            Mobile development of simple apps using react-native
          </li>
        </ul>
        <p>
          You can send me an email here
          <a href={"mailto:hailelagi@gmail.com"}>hailelagi@gmail.com</a>
        </p>
        <p>Alternatively you can reach me on</p>
        <div className="social-media">
          <a
            aria-label="git hub"
            href={"https://github.com/obsessedyouth"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#fff" size="3x" />
          </a>
          <a
            aria-label="linked in"
            href={"https://www.linkedin.com/in/hailelagi/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#fff" size="3x" />
          </a>
          <a
            aria-label="twitter"
            href={"https://twitter.com/haile_lagi"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} color="#fff" size="3x" />
          </a>
          <a
            aria-label="instagram"
            href={"https://www.instagram.com/obsessed_youth/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} color="#fff" size="3x" />
          </a>
          <a
            aria-label="dribbble"
            href={"https://dribbble.com/Haile_Designs"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDribbble} color="#fff" size="3x" />
          </a>
          <a
            aria-label="dev"
            href="https://dev.to/obsessedyouth"
            target="_blank"
            rel="noopener noreferrer"
            title="obsessedyouth's DEV Profile"
          >
            <FontAwesomeIcon icon={faDev} color="#fff" size="3x" />
          </a>
        </div>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  & h2 {
    color: #f4f4f4;
    background-color: #0a3055;
  }

  .summary {
    text-align: center;
    color: #f4f4f4;
    background-color: #0a3055;
    padding: 1em;
  }

  .summary img {
    border-radius: 50%;
  }

  .summary a {
    margin: 0.1em;
    color: #a9a9a9;
  }

  .interests {
    list-style-type: none;
    text-align: justify;
    padding: 1em;
    width: 50%;
    margin: auto;
  }

  .social-media {
    margin: 1em;
  }

  .social-media a {
    padding: 0.5em;
  }

  @media only screen and (max-width: 700px) {
    .interests {
      width: 90%;
    }
  }
`;
