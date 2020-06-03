import * as React from "react";
import { IPoll } from "../../domain/types";
import { Button } from "../common/button";

interface IProps {
  polls: IPoll[];
}

const Polls: React.SFC<IProps> = (props) => {
  const voteActionStyle: string = "btn btn-primary btn-sm";
  const onVoteActionHandler = () => {
    console.log("vote!");
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
                <td data-test-id="poll-status">{p.status}</td>
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
    </>
  );
};

export default Polls;
