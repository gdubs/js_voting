import * as React from "react";
import { IPoll } from "../../domain/types";

interface IProps {
  polls: IPoll[];
}

const Polls: React.SFC<IProps> = (props) => {
  return (
    <table>
      <tbody>
        {props.polls.map((p) => {
          return (
            <tr key={p.id}>
              <td data-test-id="poll-name">{p.name}</td>
              <td data-test-id="poll-status">{p.status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Polls;
