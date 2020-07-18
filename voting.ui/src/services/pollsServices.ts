import { VoteStatus } from "../domain/enums";
import { IPoll } from "../domain/types";

const pageSize: number = 15;
const baseUrl: string = "myapidomain";

export const ApiGetPolls = async (pageNumber: number): Promise<IPoll[]> => {
  try {
    const url =
      baseUrl + `/polls?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    return [
      {
        poll_id: "testid_ksdjflskdjfisdlks",
        name: "poll name",
        voteStatus: VoteStatus.NOT_VOTED,
        options: [],
        canSelectMultiple: false,
      },
      {
        poll_id: "testid_2",
        name: "poll name 2",
        voteStatus: VoteStatus.NOT_VOTED,
        options: [],
        canSelectMultiple: false,
      },
    ];
  } catch (err) {
    throw err;
  }
};

export const ApiGetPoll = async (poll_id: string): Promise<IPoll> => {
  try {
    const url = baseUrl + `/poll?pollId=${poll_id}`;
    const now = new Date();

    return {
      poll_id: poll_id,
      name: "poll name 2",
      voteStatus: VoteStatus.NOT_VOTED,
      options: [
        {
          pollOptionId: "poll_option_116",
          name: "question 4",
          selected: false,
        },
        {
          pollOptionId: "poll_option_117",
          name: "question 5",
          selected: false,
        },
        {
          pollOptionId: "poll_option_118",
          name: "question 6",
          selected: false,
        },
      ],
      isOpen: false,
      canSelectMultiple: false,
      closesIn: "1 day",
      endsAt: new Date(now.getDate() + 1),
      opensAt: new Date(now.getDate()),
      createdBy: "Gabriel Rubrico",
      totalParticipants: 15,
      totalResponses: 4,
      participants: [],
    };
  } catch (err) {
    throw err;
  }
};
