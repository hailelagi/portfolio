import React from "react";
import { NavLink } from "react-router-dom";

export default class TopNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sticky: "top-nav" };

    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if (window.scrollY >= 400) {
      this.setState({ sticky: "top-nav sticky-nav awesome-nav" });
    } else {
      this.setState({ sticky: "top-nav" });
    }
  };

  render() {
    return (
      <nav>
        <ul className={this.state.sticky}>
          <li>
            <NavLink to="/about-me">about me</NavLink>
          </li>

          <li>
            <NavLink to="/projects">projects</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
