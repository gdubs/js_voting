import { VoteStatus } from "../domain/enums";
import { IPoll } from "../domain/types";

const pageSize: number = 15;
const baseUrl: string = "myapidomain";

export const SGetPolls = async (pageNumber: number) => {
  try {
    const url =
      baseUrl + `/polls?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    return [
      {
        poll_id: "testid_ksdjflskdjfisdlks",
        name: "poll name",
        voteStatus: VoteStatus.NOT_VOTED,
        options: [],
      },
      {
        poll_id: "testid_2",
        name: "poll name 2",
        voteStatus: VoteStatus.NOT_VOTED,
        options: [],
      },
    ];
  } catch (err) {
    throw err;
  }
};
