import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export default function Interest(props) {
  return (
    <InterestWrapper>
      <FontAwesomeIcon icon={props.icon} size="6x" />
      <p>{props.title}</p>
      <p>{props.about}</p>
    </InterestWrapper>
  );
}

const InterestWrapper = styled.div`
  & {
    display: inline-block;
    background-color: ${({ theme }) => theme.focus};
    border: none;
    box-shadow: 0 0 113px -50px rgba(56, 56, 56, 0.88);
    padding: 2em;
    width: 20em;
    text-align: center;
    margin: 1em;
    transition: background-color ease-in-out 1.4s;

    svg {
      color: ${({ theme }) => theme.interestText};
    }

    p {
      margin: 1em;
      color: ${({ theme }) => theme.interestText};
      font-weight: 600;
    }
  }

  &:hover {
    cursor: pointer;
    background-color: var(--primary-link);
  }
  @media only screen and (max-width: 375px) {
    & {
      padding: 1em;
      width: 15em;
    }
  }
`;
