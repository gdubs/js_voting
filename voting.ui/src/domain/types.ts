import { VoteStatus } from "./enums";

export interface IPoll {
  poll_id: string;
  name: string;
  voteStatus: VoteStatus;
  options: IPollOption[];
  canSelectMultiple: boolean;
  isOpen: boolean;
  closesIn: string;
  opensAt: Date;
  endsAt: Date;
  createdBy: string;
  totalParticipants: number;
  totalResponses: number;
  participants: IParticipant[];
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

export interface IParticipant {
  id: number;
  name: string;
  email: string;
}
