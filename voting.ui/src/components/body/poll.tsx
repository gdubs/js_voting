import * as React from "react";
import { IPoll } from "../../domain/types";
import { Button } from "../common/button";
import { VoteStatus } from "../../domain/enums";
import { useState } from "react";

interface IProps {
  poll: IPoll;
}

const Poll: React.FunctionComponent<IProps> = ({ poll }) => {
  const [pollIsActive, setPollIsActive] = useState(
    poll.voteStatus == VoteStatus.NOT_VOTED
  );
  const voteBtnStyle: string = "btn btn-primary btn-sm";
  const submitVoteHandler = () => {};

  return (
    <div data-test-id="poll-component">
      This is a poll
      <ul data-test-id="poll-options">
        {poll.options.map((o) => {
          return (
            <div
              key={o.pollOptionId + "_" + poll.pollId}
              data-test-id={o.pollOptionId + "_" + poll.pollId}
            >
              {o.name}
            </div>
          );
        })}
      </ul>
      <Button
        data-test-id="poll-submit-vote"
        text={"Submit choice"}
        clickHandler={() => submitVoteHandler()}
        btnStyle={voteBtnStyle}
        disabled={!pollIsActive}
      />
    </div>
  );
};

export default Poll;
