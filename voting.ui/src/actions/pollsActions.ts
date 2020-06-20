import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction, ActionCreator, Dispatch } from "redux";
import { IPollState } from "../store/store.interfaces";
import {
  IPoll_GetPolls_Action,
  IPoll_GetPollById_Action,
  IPoll_UpdatePoll_Action,
} from "../store/actionTypes.interfaces";
import { IPoll } from "../domain/types";
import { VoteStatus } from "../domain/enums";
import { PollActionConstant } from "../store/store.enums";
import { ApiGetPolls, ApiGetPoll } from "../services/pollsServices";
import poll from "../components/body/poll";

export const GetPolls: ActionCreator<ThunkAction<
  Promise<any>,
  IPollState,
  {},
  IPoll_GetPolls_Action
>> = (pageNumber: number, pageSize: number) => {
  return async (
    dispatch: ThunkDispatch<any, any, AnyAction>
  ): Promise<void> => {
    const polls: IPoll[] = await ApiGetPolls(pageNumber);
    dispatch({
      type: PollActionConstant.GET_POLLS,
      payload: polls,
    });
  };
};

export const GetPoll: ActionCreator<ThunkAction<
  Promise<any>,
  IPollState,
  {},
  IPoll_GetPollById_Action
>> = (poll_id: string) => {
  return async (
    dispatch: ThunkDispatch<any, any, AnyAction>
  ): Promise<void> => {
    // const poll: IPoll = {
    //   poll_id: "testid2",
    //   name: "name",
    //   voteStatus: VoteStatus.NOT_VOTED,
    //   options: [],
    // };
    const poll: IPoll = await ApiGetPoll(poll_id);
    dispatch({
      type: PollActionConstant.GET_POLL,
      payload: poll,
    });
  };
};

export const UpdatePoll: ActionCreator<ThunkAction<
  Promise<any>,
  IPollState,
  {},
  IPoll_UpdatePoll_Action
>> = (poll: IPoll) => {
  return async (
    dispatch: ThunkDispatch<any, any, AnyAction>
  ): Promise<void> => {
    dispatch({
      type: PollActionConstant.UPDATE_POLL,
      payload: poll,
    });
  };
};
