import { VoteStatus } from "../domain/enums";

const pageSize: number = 15;
const baseUrl: string = "myapidomain";

export const SGetPolls = async (pageNumber: number) => {
  try {
    const url =
      baseUrl + `/polls?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    return [
      {
        pollId: "testid",
        name: "poll name",
        status: VoteStatus.OPEN,
        options: [],
      },
    ];
  } catch (err) {
    throw err;
  }
};
