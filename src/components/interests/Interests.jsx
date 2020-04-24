import React from "react";
import Interest from "./Interest";
import {
  faHourglassEnd,
  faDesktop,
  faFileSignature,
} from "@fortawesome/free-solid-svg-icons";

function Interests() {
  return (
    <section className="interests">
      <h2>Interests</h2>
      <div className="interest-align">
        <Interest title="Web development" icon={faDesktop} />
        <Interest title="Scientific computing" icon={faHourglassEnd} />
        <Interest title="Mobile development" icon={faFileSignature} />
      </div>
    </section>
  );
}

export default Interests;
