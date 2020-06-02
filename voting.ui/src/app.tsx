import * as React from "react";
import * as ReactDOM from "react-dom";
import Header from "./components/header/header";
import Body from "./components/body/body";

const App = () => {
  return (
    <div test-id="App">
      <Header test-id="header" />
      <Body />
    </div>
  );
};

export default App;
