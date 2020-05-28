import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import TopNavbar from "./components/TopNavbar.jsx";
import Introduction from "./components/Introduction.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Interests from "./components/interests/Interests.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/education/Education.jsx";
import Footer from "./components/Footer.jsx";
import Default from "./components/Default.jsx";
import TopProjects from "./components/TopProjects.jsx";

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
