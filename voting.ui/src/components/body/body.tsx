import * as React from "react";
import Polls from "./polls";
import { IPoll } from "../../domain/types";

interface IProps {}

const Body: React.SFC<IProps> = () => {
  const test_polls: IPoll[] = [{ id: 1, name: "test", status: "bam" }];
  return (
    <div data-test-id="body-polls">
      <h3>Polls</h3>
      <Polls polls={test_polls} />
    </div>
  );
};

export default Body;
