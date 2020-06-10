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
      return {
        ...state,
      };
    case PollActionConstant.GET_POLLS:
      return {
        ...state,
      };
    case PollActionConstant.UPDATE_POLL:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};
