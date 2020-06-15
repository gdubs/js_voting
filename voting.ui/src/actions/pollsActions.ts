import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction, ActionCreator, Dispatch } from "redux";
import { IPollState } from "../store/store.interfaces";
import {
  IPoll_GetPolls_Action,
  IPoll_GetPollById_Action,
} from "../store/actionTypes.interfaces";
import { IPoll } from "../domain/types";
import { VoteStatus } from "../domain/enums";
import { PollActionConstant } from "../store/store.enums";
import { SGetPolls } from "../services/pollsServices";

export const GetPolls: ActionCreator<ThunkAction<
  Promise<any>,
  IPollState,
  {},
  IPoll_GetPolls_Action
>> = (pageNumber: number, pageSize: number) => {
  return async (
    dispatch: ThunkDispatch<any, any, AnyAction>
  ): Promise<void> => {
    const polls: IPoll[] = await SGetPolls(pageNumber);
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
>> = (id: string) => {
  return async (
    dispatch: ThunkDispatch<any, any, AnyAction>
  ): Promise<void> => {
    const poll: IPoll = {
      pollId: "testid2",
      name: "name",
      voteStatus: VoteStatus.NOT_VOTED,
      options: [],
    };
    dispatch({
      type: PollActionConstant.GET_POLL,
      payload: poll,
    });
  };
};
