import { VoteStatus } from "./enums";

export interface IPoll {
  poll_id: string;
  name: string;
  voteStatus: VoteStatus;
  options: IPollOption[];
  canSelectMultiple: boolean;
}

export interface IPollOption {
  pollOptionId: string;
  name: string;
  selected: boolean;
}

export interface IPageUI {
  pageNumber: number;
  pageSize: number;
  totalPageNumber?: number;
}
