import * as React from "react";
import { IPoll } from "../../domain/types";
import { Button } from "../common/button";
import { VoteStatus } from "../../domain/enums";
import { connect, ConnectedProps } from "react-redux";
import { IAppState } from "../../store/store.interfaces";
import { Link } from "react-router-dom";

const Polls: React.FunctionComponent<RdxProps> = ({ polls }) => {
  // const [showPopup, setShowPopup] = React.useState(false);

  const voteActionStyle: string = "btn btn-primary btn-sm";
  // const onVoteActionHandler = () => {
  //   console.log("vote!");
  //   setShowPopup(true);
  // };

  return (
    <>
      <h3>Your Polls</h3>
      <table className="table">
        <thead>
          <tr>
            <td style={{ width: "70%" }}>Name</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {polls.map((p) => {
            return (
              <tr key={p.poll_id}>
                <td data-test-id="poll-name">{p.name}</td>
                <td data-test-id="poll-status">{VoteStatus[p.voteStatus]}</td>
                <td data-test-id="poll-action">
                  {/* <Button
                    text={"Vote"}
                    disabled={false}
                    clickHandler={() => onVoteActionHandler()}
                    btnStyle={voteActionStyle}
                  /> */}
                  <Link
                    className="btn btn-primary btn-sm"
                    to={`/polls/${p.poll_id}`}
                  >
                    Vote
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state: IAppState) => {
  return {
    polls: state.pollsState.polls,
  };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type RdxProps = PropsFromRedux;

export default connector(Polls);
