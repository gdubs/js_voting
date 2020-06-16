import { VoteStatus } from "./enums";

export interface IPoll {
  poll_id: string;
  name: string;
  voteStatus: VoteStatus;
  options: IPollOption[];
}

export interface IPollOption {
  pollOptionId: string;
  name: string;
}

export interface IPageUI {
  pageNumber: number;
  pageSize: number;
  totalPageNumber?: number;
}
