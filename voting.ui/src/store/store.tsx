import { createStore, applyMiddleware, compose, Store } from "redux";
import thunk from "redux-thunk";
import reducers, { IAppState } from "../reducers/reducers";

export default function configureStore(): Store<IAppState, any> {
  const store = createStore(reducers, undefined, applyMiddleware(thunk));
  return store;
}
