import React from "react";
import {
  faHackerrank,
  faFreeCodeCamp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Timeline from "./Timeline";

function Education() {
  return (
    <section className="education">
      <h2>Education</h2>
      <Timeline />
      <h3>Programming challenges</h3>

      <div className="challenges">
        <a
          href={"https://www.codewars.com/users/obsessedu/"}
          className="challenge"
        >
          <img
            src="https://www.codewars.com/users/obsessedu/badges/micro"
            height="40px"
            alt="codewars"
          />
        </a>
        <a
          href={"https://www.hackerrank.com/obsessedyouth"}
          className="challenge"
        >
          <FontAwesomeIcon icon={faHackerrank} color="#2BBE5E" size="5x" />
        </a>
        <a
          href={"https://www.freecodecamp.org/obsessedyouth"}
          className="challenge"
        >
          <FontAwesomeIcon icon={faFreeCodeCamp} color="#0A0A23" size="5x" />
        </a>
      </div>
    </section>
  );
}

export default Education;
