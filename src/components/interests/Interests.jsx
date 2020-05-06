import React from "react";
import Interest from "./Interest";
import { Link } from "react-router-dom";
import {
  faChartLine,
  faLaptopCode,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

function Interests() {
  return (
    <section className="areas">
      <h2>Interests</h2>
      <div className="interest-align">
        <Link to="/portfolio">
          <Interest
            title="Web development"
            icon={faLaptopCode}
            color="#B11030"
          />
        </Link>
          <Link to="/portfolio">
        <Interest
          title="Scientific computing"
          icon={faChartLine}
          color="#24A159"
        />
          </Link>
          <Link to="/portfolio">
        <Interest
          title="Mobile development"
          icon={faMobileAlt}
          color="#4B6A88"
        />
          </Link>
      </div>
    </section>
  );
}

export default Interests;
