import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default class TopNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sticky: "top-nav" };

    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY >= 400) {
      this.setState({ sticky: "top-nav sticky-nav awesome-nav" });
    } else {
      this.setState({ sticky: "top-nav" });
    }
  }

  render() {
    return (
      <NavWrapper>
        <ul className={this.state.sticky}>
          <li>
            <NavLink to="/about-me">about me</NavLink>
          </li>
          <li>
            <NavLink to="/projects">projects</NavLink>
          </li>
          <button onClick={this.props.toggle}>
            {this.props.theme === "dark" ? (
              <FontAwesomeIcon icon={faSun} size="lg" color="#f4f4f4" />
            ) : (
              <FontAwesomeIcon icon={faMoon} size="lg" color="#f4f4f4" />
            )}
          </button>
        </ul>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  /*Introduction navigation */
  ul {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  li,
  li a {
    list-style-type: none;
    text-decoration: none;
    margin-left: 1.2em;
    color: var(--light-font-color);
  }

  li a:hover {
    text-decoration: underline;
  }

  .top-nav {
    display: flex;
    padding: 1em;
    background-color: ${({ theme }) => theme.mainColor};
  }

  .sticky-nav {
    z-index: 1;
    width: 100%;
    position: fixed;
  }

  .awesome-nav {
    justify-content: space-evenly;
    align-items: center;
  }

  .top-nav a.active {
    text-decoration: underline;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-left: 2em;
  }

  button:hover,
  button:focus {
    outline: none;
  }

  button:active {
    transform: scale(2.5);
    transition: ease-in-out 2s;
  }

  @media only screen and (max-width: 320px) {
    li,
    button {
      margin-left: 1em;
    }
  }
`;
