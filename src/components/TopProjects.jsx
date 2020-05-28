import React from "react";
import TopProject from "./TopProject";
import Artboard from "../img/Artboard.png";

export default function TopProjects() {
  return (
    <section>
      <h2>Featured Projects</h2>

      <div className="top-projects">
        <TopProject
          image={Artboard}
          title="covid estimator"
          summary=" A novelty COVID-19 estimator. This an eligibility assessment for the #BuildforSDG hackathon organized by andela and facebook."
          code="https://github.com/obsessedyouth/obsessedyouth-covid-19-esitmator-js/tree/master"
          link="https://cocky-swanson-c0a1c8.netlify.app/"
          direction="row wrap"
        />
        <TopProject
          image={Artboard}
          title="covid estimator"
          summary=" A novelty COVID-19 estimator. This an eligibility assessment for the #BuildforSDG hackathon organized by andela and facebook."
          code="https://github.com/obsessedyouth/obsessedyouth-covid-19-esitmator-js/tree/master"
          link="https://cocky-swanson-c0a1c8.netlify.app/"
          direction="row-reverse wrap"
        />
      </div>
    </section>
  );
}
