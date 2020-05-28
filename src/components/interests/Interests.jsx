import React from "react";
import Interest from "./Interest";
import { Link } from "react-router-dom";
import {
  faChartLine,
  faLaptopCode,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export default function Interests() {
  return (
    <InterestsWrapper>
      <h2>Interests</h2>
      <div className="interests">
        <Link to="/portfolio">
          <Interest
            title="Web development"
            icon={faLaptopCode}
            color="#1c1e21"
            about="I dabble in building stuff that works on the internet.
            From simple static pages to complex web-based applications and
            everything in-between that can travel through a network.
            Browse my web development projects created with &#10084; "
          />
        </Link>
        <Link to="/portfolio">
          <Interest
            title="Scientific computing"
            icon={faChartLine}
            color="#1c1e21"
            about="I often try to create models and simulations to understand natural systems.
             Sometimes I'm right, sometimes I'm wrong :) You can view my mathematical models,
             computational models, and computer simulations here!"
          />
        </Link>
        <Link to="/portfolio">
          <Interest
            title="Mobile development"
            icon={faMobileAlt}
            color="#1c1e21"
            about="So I have this brilliant app idea that's gonna change the world!
            Oh really? Let's talk &#36;&#36;&#36; I make simple apps that you can
            use on your phone, mostly for fun and personal use thanks to the awesome
            React native framework. See my apps in action here.
            "
          />
        </Link>
      </div>
    </InterestsWrapper>
  );
}

const InterestsWrapper = styled.section`
  & h2 {
    margin-top: 1.5em;
  }

  .interests {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-top: 3em;
  }
`;
