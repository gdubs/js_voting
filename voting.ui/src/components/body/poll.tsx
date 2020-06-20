import * as React from "react";
import { IPoll } from "../../domain/types";
import { Button } from "../common/button";
import { VoteStatus } from "../../domain/enums";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IAppState } from "../../store/store.interfaces";
import { GetPoll, UpdatePoll } from "../../actions/pollsActions";
import { ThunkDispatch } from "redux-thunk";
import { ConnectedProps, connect } from "react-redux";
import { AnyAction } from "redux";

const Poll: React.FunctionComponent<RdxProps> = ({
  poll,
  getPoll,
  submitPollVote,
}) => {
  const { poll_id } = useParams();
  const [pollIsActive, setPollIsActive] = useState(
    poll?.voteStatus == VoteStatus.NOT_VOTED
  );
  const voteBtnStyle: string = "btn btn-primary btn-sm";

  React.useEffect(() => {
    getPoll(poll_id).then(() => {
      console.log("pramis!");
    });

    if (!poll) console.log("cant find poll");
  }, []);

  const submitVote = () => {
    // get selected option
    // update the poll
    // call the action
    let updated_poll: IPoll = { ...poll };
    submitPollVote(updated_poll);
  };

  const onOptionSelected = (poll_option_id: string) => {
    console.log("option selected");
    const poll_option = poll?.options.find(
      (p) => p.pollOptionId == poll_option_id
    );
    const updated_options = poll?.options.map((o) => {
      o.selected = o.pollOptionId === poll_option_id;
      return o;
    });
    const new_poll = { ...poll, options: updated_options };
    submitPollVote(new_poll);
  };

  return (
    <div data-test-id="poll-component">
      This is a poll {poll_id}
      <div>bla {poll?.name}</div>
      <ul data-test-id="poll-options">
        {poll?.options.map((o) => {
          return (
            <div
              key={o.pollOptionId + "_" + poll.poll_id}
              data-test-id={o.pollOptionId + "_" + poll.poll_id}
            >
              <input
                type="radio"
                value={o.name}
                name={poll_id}
                checked={o.selected}
                onChange={(e) => onOptionSelected(o.pollOptionId)}
              />{" "}
              {o.name}
            </div>
          );
        })}
      </ul>
      <Link className={voteBtnStyle} to="/polls">
        Polls
      </Link>
      <Button
        data-test-id="poll-submit-vote"
        text={"Submit vote"}
        clickHandler={() => submitVote()}
        btnStyle={voteBtnStyle}
        disabled={!pollIsActive}
      />
    </div>
  );
};

const mapStateToProps = (state: IAppState) => {
  return {
    poll: state.pollsState.poll,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    getPoll: (poll_id: string) => dispatch(GetPoll(poll_id)),
    submitPollVote: (poll: IPoll) => dispatch(UpdatePoll(poll)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type RdxProps = PropsFromRedux;

export default connector(Poll);
