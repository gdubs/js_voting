import * as React from "react";
import { IPoll } from "../../domain/types";
import { Button } from "../common/button";
import { VoteStatus } from "../../domain/enums";
import Popup from "../common/popup";

interface IProps {
  polls: IPoll[];
}

const Polls: React.SFC<IProps> = (props) => {
  const [showPopup, setShowPopup] = React.useState(false);

  const voteActionStyle: string = "btn btn-primary btn-sm";
  const onVoteActionHandler = () => {
    console.log("vote!");
    setShowPopup(true);
  };

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
          {props.polls.map((p) => {
            return (
              <tr key={p.id}>
                <td data-test-id="poll-name">{p.name}</td>
                <td data-test-id="poll-status">{VoteStatus[p.status]}</td>
                <td data-test-id="poll-action">
                  <Button
                    text={"Vote"}
                    clickHandler={() => onVoteActionHandler()}
                    btnStyle={voteActionStyle}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {showPopup ? (
        <Popup content={'test bro'} closedPopupHandler={() => {onVoteActionHandler}}/>
      ) : null}
    </>
  );
};

export default Polls;
