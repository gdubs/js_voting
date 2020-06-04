import { VoteStatus } from "./enums";

export interface IPoll {
  id: number;
  name: string;
  status: VoteStatus;
}
