import React from "react";
import TopProject from "./TopProject";
import Artboard800 from "../img/Artboard800.png";
import Artboard500 from "../img/Artboard500.png";
import Artboard300 from "../img/Artboard300.png";

export default function TopProjects() {
  return (
    <section>
      <h2>Featured Projects</h2>

      <div className="top-projects">
        <TopProject
          image={Artboard800}
          phone={Artboard500}
          smallPhone={Artboard300}
          title="awesome project"
          summary="Some information about this kick ass saiyan project reaching super saiyan god mode awesome"
          code="https://github.com/obsessedyouth/obsessedyouth"
          link="https://github.com/obsessedyouth/obsessedyouth"
          direction="row wrap"
        />
        <TopProject
          image={Artboard800}
          phone={Artboard500}
          smallPhone={Artboard300}
          title="another one!"
          summary="Some information about this kick ass saiyan project reaching super saiyan god mode awesome"
          code="https://github.com/obsessedyouth/obsessedyouth"
          link="https://github.com/obsessedyouth/obsessedyouth"
          direction="row-reverse wrap"
        />
      </div>
    </section>
  );
}
