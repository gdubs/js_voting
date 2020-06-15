import { combineReducers } from "redux";
import { IPollState } from "../store/store.interfaces";
import { PollsReducer } from "./pollsReducers";

const reducers = combineReducers<IAppState>({
  pollsState: PollsReducer,
});

export default reducers;
