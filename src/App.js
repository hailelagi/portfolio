import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { lightTheme, darkTheme } from "./theme.js";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import TopNavbar from "./components/TopNavbar.jsx";
import Introduction from "./components/Introduction.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Interests from "./components/interests/Interests.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/education/Education.jsx";
import Footer from "./components/Footer.jsx";
import Default from "./components/Default.jsx";
import TopProjects from "./components/TopProjects.jsx";

// react-router scroll fix
class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return null;
  }
}

// global style
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background} !important;
  }

      /* Custom Scroll bar*/
      ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-track {
        background: #dddddd;
      }
      ::-webkit-scrollbar-thumb {
        background: #496885;
        border-radius: 15px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
`;

function App() {
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };
  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <TopNavbar toggle={toggleTheme} theme={theme} />
        <Switch>
          <Route exact path="/">
            <GlobalStyles />
            <Introduction />
            <TopProjects />
            <Interests />
            <Skills />
            <Education />
            <Footer />
          </Route>
          <Route path="/about-me">
            <GlobalStyles />
            <Introduction />
            <TopProjects />
            <Interests />
            <Skills />
            <Education />
            <Footer />
          </Route>
          <Route path="/projects">
            <ScrollToTopOnMount />
            <GlobalStyles />
            <Portfolio />
            <Footer />
          </Route>
          <Route path="/default" component={Default} />
          <Route path="*" component={Default} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
