import React from "react";

function Skill(props) {
    return (
        <div className="skill">
            <svg
                id="svg"
                width="180"
                height="180"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <circle
                        r="75"
                        cx="100"
                        cy="100"
                        fill="#f4f4f4"
                        strokeDasharray="565.48"
                        strokeDashoffset="0"
                    />
                    <circle
                        id="bar"
                        r="75"
                        cx="100"
                        cy="100"
                        fill="transparent"
                        strokeDasharray="565.48"
                        style={{strokeDashoffset: ((100 - props.mastery) / 100) * Math.PI * (90 * 2)}}
                    />
                    <text className="percentage" x="70" y="110" fill="242424">{props.mastery}%</text>
                </g>
            </svg>
            <h4 className="info">{props.skill}</h4>
            <p className="info">{props.exp}</p>
        </div>
    );
}

export default Skill;
