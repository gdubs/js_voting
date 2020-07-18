import * as React from "react";
import { IPoll } from "../../domain/types";
import { Button } from "../common/button";
import { VoteStatus } from "../../domain/enums";
import { connect, ConnectedProps } from "react-redux";
import { IAppState } from "../../store/store.interfaces";
import { Link } from "react-router-dom";
import VoteIcon from "../common/icons/vote_icon";

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
      <div className="row">
        <div className="col-md-12">
          {polls.map((p) => {
            return (
              <div className="card card-list mt-2">
                <div className="card-body">
                  <div className="row">
                    {/* icon on right */}
                    <div className="col-md-1 d-flex flex-row align-items-center">
                      <div className="rounded-circle poll-icon-container text-success color-custom-primary ">
                        <VoteIcon />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3>Name of poll</h3>
                      <div className="my-n1">
                        <small className="text-muted">By: Poll creator</small>
                      </div>
                      <div className="my-n1">
                        <small>Time left</small>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="d-flex flex-row align-items-center align-middle h-100">
                        <small className="text-uppercase text-muted mr-3">
                          Voted
                        </small>
                        <small className="mr-1">n of x</small>
                        <div className="progress" style={{ width: "25%" }}>
                          <div
                            className="progress-bar bg-custom-primary"
                            role="progressbar"
                            style={{ width: 10 }}
                            aria-valuenow="6"
                            aria-valuemin="0"
                            aria-valuemax="10"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 d-flex flex-row align-items-center">
                      icons again
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <table className="table">
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
      </table> */}
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
