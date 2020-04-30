import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Interest(props) {
  return (
    <div className="interest">
      <FontAwesomeIcon icon={props.icon} size="6x" color={props.color} />
      <p>{props.title}</p>
    </div>
  );
}

export default Interest;
