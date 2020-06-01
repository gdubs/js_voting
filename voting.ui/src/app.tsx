import * as React from "react";
import * as ReactDOM from "react-dom";
import Header from "./components/header/header";

const App = () => {
  return (
    <div test-id="App">
      <Header test-id="header" />
      <div>Bodayy</div>
    </div>
  );
};

export default App;
