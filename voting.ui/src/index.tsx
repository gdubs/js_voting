import * as React from "react";
import * as ReactDOM from "react-dom";

interface IProps {}

const Root: React.SFC<IProps> = (props) => {
  return <div>Blah</div>;
};

ReactDOM.render(<Root />, document.getElementById("app"));
