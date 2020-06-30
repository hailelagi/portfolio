import React from "react";
import {
  /* faHackerrank, */
  faFreeCodeCamp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Timeline from "./Timeline";
import styled from "styled-components";

export default function Education() {
  return (
    <EducationWrapper>
      <h2>Education</h2>
      <Timeline />
      <h3>Programming profile</h3>

      <div className="challenges">
        <a
          href={"https://www.codewars.com/users/obsessedyouth/"}
          className="challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://www.codewars.com/users/obsessedyouth/badges/micro"
            height="40px"
            alt="code wars"
          />
        </a>

        {/* <a
            aria-label="hacker rank"
          href={"https://www.hackerrank.com/}
          className="challenge"
        >
          <FontAwesomeIcon icon={faHackerrank} color="#2BBE5E" size="5x" />
        </a> */}
        <a
          aria-label="free code camp"
          href={"https://www.freecodecamp.org/obsessedyouth"}
          className="challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFreeCodeCamp} color="#0A0A23" size="5x" />
        </a>
      </div>
    </EducationWrapper>
  );
}

const EducationWrapper = styled.section`
  h2 {
    margin-top: 1em;
  }

  h3 {
    color: ${({ theme }) => theme.skillTitle};
  }

  .challenge {
    margin: 1em 2.5em;
  }

  .challenges {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${({ theme }) => theme.focus};
  }
`;
