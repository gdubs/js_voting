import { Reducer } from "redux";
import { IPollState } from "../store/store.interfaces";
import { IPollsActions } from "../store/actionTypes.interfaces";
import { PollActionConstant } from "../store/store.enums";

const initState: IPollState = {
  polls: [],
  poll: null,
  pollsPageUI: { pageNumber: 1, pageSize: 10, totalPageNumber: 0 },
};

export const PollsReducer: Reducer<IPollState, IPollsActions | any> = (
  state = initState,
  action
) => {
  switch (action.type) {
    case PollActionConstant.GET_POLL:
      console.log("GET_POLL");
      /*const selected_poll = state.polls.find(
        (p) => p.poll_id === action.payload
      );*/

      return {
        ...state,
        poll: action.payload,
      };
    case PollActionConstant.GET_POLLS:
      const new_polls = action.payload;
      return {
        ...state,
        polls: new_polls,
      };
    case PollActionConstant.UPDATE_POLL:
      return {
        ...state,
        poll: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
