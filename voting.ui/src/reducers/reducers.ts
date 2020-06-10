import { combineReducers } from "redux";
import { IPollState } from "../store/store.interfaces";
import { PollsReducer } from "./pollsReducers";

export interface IAppState {
  pollsState: IPollState;
}

const reducers = combineReducers<IAppState>({
  pollsState: PollsReducer,
});

export default reducers;
