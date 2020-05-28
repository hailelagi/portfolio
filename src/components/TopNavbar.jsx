import React from "react";
import { NavLink } from "react-router-dom";
<<<<<<< HEAD
import styled from "styled-components";
=======
>>>>>>> 521a2a453184378622f37d84e20db9a6d5c10a92

export default class TopNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sticky: "top-nav" };

    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
<<<<<<< HEAD
  componentWillMount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

=======
>>>>>>> 521a2a453184378622f37d84e20db9a6d5c10a92
  handleScroll = () => {
    if (window.scrollY >= 400) {
      this.setState({ sticky: "top-nav sticky-nav awesome-nav" });
    } else {
      this.setState({ sticky: "top-nav" });
    }
  };

  render() {
    return (
<<<<<<< HEAD
      <NavWrapper>
=======
      <nav>
>>>>>>> 521a2a453184378622f37d84e20db9a6d5c10a92
        <ul className={this.state.sticky}>
          <li>
            <NavLink to="/about-me">about me</NavLink>
          </li>

          <li>
            <NavLink to="/projects">projects</NavLink>
          </li>
<<<<<<< HEAD

          <button style={{ marginLeft: 30 }}>dark mode ⚠️⚠️</button>
        </ul>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  /*Introduction navigation */
  li,
  li a {
    list-style-type: none;
    text-decoration: none;
    margin-left: 1.2em;
    color: #f4f4f4;
  }

  li a:hover {
    text-decoration: underline;
  }

  .top-nav {
    display: flex;
    padding: 1em;
    background-color: #0a3055;
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

  @media only screen and (max-width: 320px) {
    .top-nav {
      flex-flow: column;
    }
  }
`;
=======
        </ul>
      </nav>
    );
  }
}
>>>>>>> 521a2a453184378622f37d84e20db9a6d5c10a92
