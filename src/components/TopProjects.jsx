import React from "react";

import TopProject from "./TopProject";
import Artboard from "../img/Artboard.png";
import Card from "./portfolio/Card";

function TopProjects(props) {
  return (
    <section
      className="featured-projects"
      style={{ backgroundImage: "url(" + require("../img/bg.png") + ")" }}
    >
      <h2>Featured Project</h2>
      <div className="top-projects">
        <TopProject
          image={Artboard}
          title="covid estimator"
          summary=" A novelty COVID-19 estimator. This an eligibility assessment for the #BuildforSDG hackathon organized by andela and facebook.

          "
          width="700px"
          height="500px"
        />
      </div>
    </section>
  );
}

export default TopProjects;
