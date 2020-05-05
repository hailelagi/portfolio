import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/App.css";
import "./styles/topnavbar.css";
import "./styles/portfolio.css";
import "./styles/topprojects.css";
import "./styles/interesting.css";
import "./styles/skills.css";
import "./styles/education.css";
import "./styles/footer.css";

import TopNavbar from "./components/TopNavbar";
import Introduction from "./components/introduction/Introduction";
import Portfolio from "./components/portfolio/Portfolio";
import Interests from "./components/interests/Interests";
import Skills from "./components/skills/Skills";
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
        <Route path="*" component={Default} />
      </Switch>
    </Router>
  );
}

export default App;
