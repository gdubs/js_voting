import * as React from "react";
import Polls from "./polls";
import { IPoll } from "../../domain/types";
import { Route, Switch } from "react-router-dom";
import { VoteStatus } from "../../domain/enums";

interface IProps {}

const Body: React.SFC<IProps> = () => {
  const test_polls: IPoll[] = [
    { id: 1, name: "test", status: VoteStatus.OPEN },
    { id: 2, name: "test 2", status: VoteStatus.OPEN },
    { id: 3, name: "test 3", status: VoteStatus.OPEN },
    { id: 4, name: "test 4", status: VoteStatus.OPEN },
    { id: 5, name: "test 5", status: VoteStatus.OPEN },
  ];
  return (
    <div className="container" data-test-id="body-polls">
      <Polls polls={test_polls} />
    </div>
  );
};

export default Body;
