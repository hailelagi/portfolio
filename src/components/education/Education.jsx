import React from "react";
import {
  faHackerrank,
  faFreeCodeCamp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Education() {
  return (
    <section className="education">
      <h2>Education</h2>
      <h3>Coding challenges</h3>
      <div className="challenges">
        <img
          src="https://www.codewars.com/users/obsessedu/badges/micro"
          height="55px"
          alt="codewars"
        />
        <FontAwesomeIcon icon={faHackerrank} color="#2BBE5E" size="5x" />
        <FontAwesomeIcon icon={faFreeCodeCamp} color="#0A0A23" size="5x" />
      </div>
        <h3>Community, hackathons and events</h3>
        <ul>
            <li>Major League Hacking</li>
            <li>Andela Learning Community</li>
            <li>Python Nigeria</li>
        </ul>

    </section>
  );
}

export default Education;
