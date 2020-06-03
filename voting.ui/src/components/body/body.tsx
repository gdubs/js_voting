import * as React from "react";
import Polls from "./polls";
import { IPoll } from "../../domain/types";
import { Route, Switch } from "react-router-dom";

interface IProps {}

const Body: React.SFC<IProps> = () => {
  const test_polls: IPoll[] = [{ id: 1, name: "test", status: "bam" }];
  return (
    <div className="container" data-test-id="body-polls">
      <Polls polls={test_polls} />
    </div>
  );
};

export default Body;
