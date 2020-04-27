import React, { Component } from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";

class Introduction extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="introduction" className={"introduction"}>
          <Navbar />
          <Profile />
        </section>
      </React.Fragment>
    );
  }
}

export default Introduction;
