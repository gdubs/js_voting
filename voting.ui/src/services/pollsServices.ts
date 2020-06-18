import { VoteStatus } from "../domain/enums";
import { IPoll } from "../domain/types";

const pageSize: number = 15;
const baseUrl: string = "myapidomain";

export const SGetPolls = async (pageNumber: number): Promise<IPoll[]> => {
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

export const SGetPoll = async (poll_id: string): Promise<IPoll> => {
  try {
    const url = baseUrl + `/poll?pollId=${poll_id}`;

    return {
      poll_id: poll_id,
      name: "poll name 2",
      voteStatus: VoteStatus.NOT_VOTED,
      options: [
        { pollOptionId: "poll_option_116", name: "question 4" },
        { pollOptionId: "poll_option_117", name: "question 5" },
        { pollOptionId: "poll_option_118", name: "question 6" },
      ],
    };
  } catch (err) {
    throw err;
  }
};
