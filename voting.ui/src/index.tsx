import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app";

import { Provider } from "react-redux";
import { Store } from "redux";
import configureStore from "./store/store";
import { IAppState } from "./store/store.interfaces";

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
