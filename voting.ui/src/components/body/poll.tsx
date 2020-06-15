import * as React from "react";
import { IPoll } from "../../domain/types";

interface IProps {
  poll: IPoll;
}

const Poll: React.FunctionComponent<IProps> = ({ poll }) => {
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
    </div>
  );
};

export default Poll;
