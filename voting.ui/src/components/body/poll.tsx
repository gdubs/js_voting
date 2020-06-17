import * as React from "react";
import { IPoll } from "../../domain/types";
import { Button } from "../common/button";
import { VoteStatus } from "../../domain/enums";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IAppState } from "../../store/store.interfaces";
import { GetPoll } from "../../actions/pollsActions";
import { ThunkDispatch } from "redux-thunk";
import { ConnectedProps, connect } from "react-redux";
import { AnyAction } from "redux";

const Poll: React.FunctionComponent<RdxProps> = ({ poll, getPoll }) => {
  const { poll_id } = useParams();
  const [pollIsActive, setPollIsActive] = useState(
    poll?.voteStatus == VoteStatus.NOT_VOTED
  );
  const voteBtnStyle: string = "btn btn-primary btn-sm";

  React.useEffect(() => {
    getPoll(poll_id);
  }, []);

  const submitVoteHandler = () => {};

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
        text={"Submit choice"}
        clickHandler={() => submitVoteHandler()}
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
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type RdxProps = PropsFromRedux;

export default connector(Poll);
