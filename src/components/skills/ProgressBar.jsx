import React from "react";

function ProgressBar(props) {
  return (
    <div className="other-skill">
      <h4>{props.skill}</h4>
        <span className="other-mastery" style={{ left: `${props.increment}em`,color:props.color }}>{props.percentage}%</span>
      <div className={props.progress}>
        <div className="fill" style={{ width: `${props.percentage}%`}} />
      </div>
    </div>
  );
}

export default ProgressBar;
