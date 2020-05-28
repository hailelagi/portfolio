import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import TopNavbar from "./components/TopNavbar";
import Introduction from "./components/Introduction";
import Portfolio from "./components/portfolio/Portfolio";
import Interests from "./components/interests/Interests";
import Skills from "./components/Skills";
import Education from "./components/education/Education";
import Footer from "./components/Footer";
import Default from "./components/Default";
import TopProjects from "./components/TopProjects";

function App() {
  return (
    <Router>
      <TopNavbar />
      <Switch>
        <Route exact path="/">
          <Introduction />
          <TopProjects />
          <Interests />
          <Skills />
          <Education />
          <Footer />
        </Route>
        <Route path="/about-me">
          <Introduction />
          <TopProjects />
          <Interests />
          <Skills />
          <Education />
          <Footer />
        </Route>
        <Route path="/projects">
          <Portfolio />
          <Footer />
        </Route>
        <Route path="/default" component={Default} />
        <Route path="*" component={Default} />
      </Switch>
    </Router>
  );
}

export default App;
