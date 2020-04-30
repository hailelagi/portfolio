import React, { Component } from "react";
import Profile from "./Profile";

class Introduction extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="introduction" className={"introduction"}>
          <Profile />
        </section>
      </React.Fragment>
    );
  }
}

export default Introduction;
