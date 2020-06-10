import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app";

import { Provider } from "react-redux";
import { Store } from "redux";
import { IAppState } from "./reducers/reducers";
import configureStore from "./store/store";

interface IProps {
  store: Store<IAppState>;
}

const Root: React.FunctionComponent<IProps> = (props) => {
  return (
    <Provider store={props.store}>
      <App />
    </Provider>
  );
};

const store = configureStore();
ReactDOM.render(<Root store={store} />, document.getElementById("app"));
