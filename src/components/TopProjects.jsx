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
          summary=" A novelty COVID-19 estimator. This an eligibility assessment for the #BuildforSDG hackathon organized by andela and facebook."
          code="https://github.com/obsessedyouth/obsessedyouth-covid-19-esitmator-js/tree/master"
          link="https://cocky-swanson-c0a1c8.netlify.app/"
        />
      </div>
    </section>
  );
}

export default TopProjects;
