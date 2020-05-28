import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export default function Interest(props) {
  return (
    <InterestWrapper>
      <FontAwesomeIcon icon={props.icon} size="6x" color={props.color} />
      <p>{props.title}</p>
      <p>{props.about}</p>
    </InterestWrapper>
  );
}

const InterestWrapper = styled.div`
  & {
    display: inline-block;
    background-color: #fff;
    border: none;
    box-shadow: 0 0 113px -50px rgba(56, 56, 56, 0.88);
    padding: 2em;
    width: 20em;
    text-align: center;
    margin: 1em;
    transition: background-color ease-in-out 1.4s;

    p {
      margin: 1em;
      color: #1c1e21;
      font-weight: 600;
    }
  }

  &:hover {
    cursor: pointer;
    background-color: #e4e4e4;
  }
`;
