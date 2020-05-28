import { Link } from "react-router-dom";
import profile from "../img/profile.png";
import waving from "../img/waving_hand_sign_emoji.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faCloudDownloadAlt,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import React from "react";

export default function Introduction() {
  return (
    <React.Fragment>
      <SectionWrapper>
        <header className={"profile"}>
          <img id="profile-pic" src={profile} alt={"profile"} />
          <h1>
            Hi
            <img
              src={waving}
              width="30px"
              alt="waving emoji hand"
              className="waving"
            />
            I'm <span id="name">Haile Lagi</span> - chemical engineering
            student, programmer and web developer. Take a look around the
            awesome stuff I build. See anything you like, buy me coffee?
          </h1>
          <div className={"call-to-action"}>
            <button
              disabled={true}
              style={{ backgroundColor: "gray", cursor: "not-allowed" }}
            >
              <FontAwesomeIcon icon={faCloudDownloadAlt} size="sm" /> download
              my resume
            </button>
            <Link to="/projects">
              <button>
                <FontAwesomeIcon icon={faClipboardList} size="sm" /> projects
              </button>
            </Link>
          </div>
        </header>
      </SectionWrapper>
    </React.Fragment>
  );
}

const SectionWrapper = styled.section`
  .waving {
    animation: shake 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    animation-delay: 0.2s;
    animation-iteration-count: 7;
    transform: translate3d(0px, 0px, 0px);
    margin: 0 0.1em;
  }

  .waving:hover {
    cursor: pointer;
    animation-iteration-count: infinite;
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 5px);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 2px, 5px);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }

  & {
    background-color: #0a3055;
  }

  /*Profile*/
  .profile {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 0.3em;
  }

  .profile h1 {
    width: 60%;
    font-family: Apercu, "Source Sans Pro", system, system-ui, -apple-system,
      BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif;
    font-size: 150%;
    font-weight: 500;
    margin: 0.3em;
    color: #f4f4f4;
  }
  #name {
    color: #81cfe0;
    font-weight: 800;
    font-size: 120%;
  }

  #profile-pic {
    border-radius: 50%;
    -webkit-box-shadow: 0 4px 20px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0 4px 20px -3px rgba(0, 0, 0, 0.75);
    box-shadow: 0 4px 20px -3px rgba(0, 0, 0, 0.75);
  }

  .call-to-action button {
    margin: 1em;
    background: #394b5c;
    color: #fff;
    padding: 1em;
    border-radius: 2px;
    text-transform: uppercase;
    border-style: none;
    cursor: pointer;
    -webkit-box-shadow: 0 4px 17px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0 4px 17px -6px rgba(0, 0, 0, 0.75);
    box-shadow: 0 4px 17px -6px rgba(0, 0, 0, 0.75);
  }

  .call-to-action button:hover {
    background-color: #435c72;
  }
`;
