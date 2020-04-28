import React from "react";
import Introduction from "./components/introduction/Introduction";
import "./styles/App.css";
import "./styles/interesting.css";
import "./styles/skills.css";
import "./styles/education.css";
import "./styles/footer.css";
import Interests from "./components/interests/Interests";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Introduction />
      <Interests />
      <Skills />
      <Education />
      <Footer />
    </React.Fragment>
  );
}

export default App;
