import * as React from "react";
import * as ReactDOM from "react-dom";
import Header from "./components/header/header";
import Body from "./components/body/body";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      {/* <div data-test-id="App"> */}
      <Header data-test-id="header" />
      <Body />
      {/* </div> */}
    </Router>
  );
};

export default App;
