import React from "react";
import {
  faDribbble,
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import profile from "../../img/profile.png";

function Footer() {
  return (
    <footer>
      <div className="summary">
        <h2>Get in Touch</h2>
        <img src={profile} alt={"profile"} />
        <p>
          I'm not currently looking for work but I am open to opportunities to
          collaborate on interesting projects.
        </p>
        <ul className="interests">
          <li>
            <FontAwesomeIcon icon={faCheck} color="#9ACD32" size="sm" />
            Web development using the MERN stack
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} color="#9ACD32" size="sm" />
            Simulation based optimization problems using python (sciPy, numpy,matplotlib and pandas etc)
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} color="#9ACD32" size="sm" />
            Mobile development of simple apps using React-native or Ionic
          </li>
        </ul>
        <p>
          You can send me an email here
          <a href={"mailto:hailelagi@gmail.com"}>hailelagi@gmail.com</a>
        </p>
        <p>Alternatively you can reach me on</p>
        <div className="social-media">
          <a href={"https://github.com/obsessedyouth"}><FontAwesomeIcon icon={faGithub} color="#fff" size="3x" /></a>
          <a href={"https://www.linkedin.com/in/hailelagi/"}><FontAwesomeIcon icon={faLinkedin} color="#fff" size="3x" /></a>
          <a href={"https://twitter.com/haile_lagi"}><FontAwesomeIcon icon={faTwitter} color="#fff" size="3x" /></a>
          <a href={"https://www.instagram.com/obsessed_youth/"}><FontAwesomeIcon icon={faInstagram} color="#fff" size="3x" /></a>
          <a href={"https://dribbble.com/Haile_Designs"}><FontAwesomeIcon icon={faDribbble} color="#fff" size="3x" /></a>
        </div>






      </div>
    </footer>
  );
}

export default Footer;
