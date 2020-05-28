import React from "react";
import {
  /* faHackerrank, */
  faFreeCodeCamp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Timeline from "./Timeline";
<<<<<<< HEAD
import styled from "styled-components";

function Education() {
  return (
    <EducationWrapper>
=======

function Education() {
  return (
    <section className="education">
>>>>>>> 521a2a453184378622f37d84e20db9a6d5c10a92
      <h2>Education</h2>
      <Timeline />
      <h3>Programming profile</h3>

      <div className="challenges">
        <a
<<<<<<< HEAD
          href={"https://www.codewars.com/users/obsessedyouth/"}
          className="challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://www.codewars.com/users/obsessedyouth/badges/micro"
=======
          href={"https://www.codewars.com/users/obsessedu/"}
          className="challenge"
        >
          <img
            src="https://www.codewars.com/users/obsessedu/badges/micro"
>>>>>>> 521a2a453184378622f37d84e20db9a6d5c10a92
            height="40px"
            alt="code wars"
          />
        </a>
<<<<<<< HEAD
        {/* <a
=======
          {/* <a
>>>>>>> 521a2a453184378622f37d84e20db9a6d5c10a92
            aria-label="hacker rank"
          href={"https://www.hackerrank.com/}
          className="challenge"
        >
          <FontAwesomeIcon icon={faHackerrank} color="#2BBE5E" size="5x" />
        </a> */}
        <a
<<<<<<< HEAD
          aria-label="free code camp"
          href={"https://www.freecodecamp.org/obsessedyouth"}
          className="challenge"
          target="_blank"
          rel="noopener noreferrer"
=======
            aria-label="free code camp"
          href={"https://www.freecodecamp.org/obsessedyouth"}
          className="challenge"
>>>>>>> 521a2a453184378622f37d84e20db9a6d5c10a92
        >
          <FontAwesomeIcon icon={faFreeCodeCamp} color="#0A0A23" size="5x" />
        </a>
      </div>
<<<<<<< HEAD
    </EducationWrapper>
  );
}

const EducationWrapper = styled.section`
  & h2 {
    margin-top: 1em;
  }

  & .challenge {
    margin: 1em 2.5em;
  }

  & .challenges {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: #fff;
  }
`;
=======
    </section>
  );
}

>>>>>>> 521a2a453184378622f37d84e20db9a6d5c10a92
export default Education;
