import { PollActionConstant } from "./store.enums";
import { IPoll } from "../domain/types";

export interface IPoll_GetPolls_Action {
  type: PollActionConstant.GET_POLLS;
  payload: { polls: IPoll[] };
}
export interface IPoll_GetPollById_Action {
  type: PollActionConstant.GET_POLL;
  payload: string;
}
export interface IPoll_UpdatePoll_Action {
  type: PollActionConstant.UPDATE_POLL;
  payload: IPoll;
}

export type IPollsActions =
  | IPoll_GetPolls_Action
  | IPoll_GetPollById_Action
  | IPoll_UpdatePoll_Action;
