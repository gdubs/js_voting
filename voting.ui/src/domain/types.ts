import { VoteStatus } from "./enums";

export interface IPoll {
  pollId: string;
  name: string;
  status: VoteStatus;
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
