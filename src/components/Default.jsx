<<<<<<< HEAD
import React from "react";
import styled from "styled-components";
import mage from "../../src/img/mage.gif";

export default function () {
  return (
    <React.Fragment>
      <ErrorTitle>404 Page not found</ErrorTitle>
      <ImageWrapper>
        <img
          src={mage}
          alt="mage"
        />
      </ImageWrapper>
      <FancyText>
        It seems you've gotten a little lost. That's okay.{" "}
        <span role="img" aria-label="emoji okay">
          👌
        </span>{" "}
        A black mage appears to help. Follow his magic and{" "}
        <a href="/projects">return to projects</a> or{" "}
        <a href="/"> learn more about me</a>
      </FancyText>
    </React.Fragment>
  );
}

const ErrorTitle = styled.h1`
  color: #f4f4f4;
  background-color: #0a3055;
  text-align: center;
  padding: 1em;
`;

const ImageWrapper = styled.div`
  img{
    display: block;
    width: 25%;
    margin: 1em auto;
  }
  @media only screen and (max-width: 800px) {
  img{
    width: 45%;
  }
  @media only screen and (max-width: 500px) {
  img{
    width: 55%;
  }
`;

const FancyText = styled.p`
  text-align: center;
  padding: 1em;
  font-size: 150%;
`;
=======
import React, {Component} from 'react';

class Default extends Component {
    render() {
        return (
            <div>
                <h1>404 Page not found</h1>
            </div>
        );
    }
}

export default Default;
>>>>>>> 521a2a453184378622f37d84e20db9a6d5c10a92
