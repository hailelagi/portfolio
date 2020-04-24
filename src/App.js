import React from "react";
import Introduction from "./components/introduction/Introduction";
import "./styles/App.css";
import "./styles/interesting.css";
import Interests from "./components/interests/Interests";

function App() {
  return (
    <React.Fragment>
      <Introduction />
      <Interests />
    </React.Fragment>
  );
}

export default App;
