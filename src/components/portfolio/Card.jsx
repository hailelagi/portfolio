import React from "react";
import {faCode} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt="project one" width="150px" height="250px"/>
            <h4>{props.title}</h4>
            <p>{props.summary}</p>
            <span>{props.tech}</span>
            <div>
                <a href={props.code}><button>Code <FontAwesomeIcon icon={faCode} size="1x"/></button></a>
                <a href={props.deploy}><button>Deployment</button></a>
            </div>
        </div>
    );
}

export default Card;
