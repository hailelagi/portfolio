import React from "react";
import Interest from "./Interest";
import {
  faChartLine,
  faLaptopCode,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

function Interests() {
  return (
    <section className="interests">
      <h2>Interests</h2>
      <div className="interest-align">
        <Interest title="Web development" icon={faLaptopCode} color="#B11030"/>
        <Interest title="Scientific computing" icon={faChartLine} color="#24A159" />
        <Interest title="Mobile development" icon={faMobileAlt} color="#4B6A88" />
      </div>
    </section>
  );
}

export default Interests;
