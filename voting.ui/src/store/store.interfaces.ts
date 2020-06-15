import { IPoll, IPageUI } from "../domain/types";

export interface IPollState {
  readonly polls: IPoll[];
  readonly poll: IPoll | null;
  readonly pollsPageUI: IPageUI;
}

export interface IAppState {
  pollsState: IPollState;
}
