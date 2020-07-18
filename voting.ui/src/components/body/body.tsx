import * as React from "react";
import Polls from "./polls";
import { IPoll } from "../../domain/types";
import { Route, Switch } from "react-router-dom";
import { VoteStatus } from "../../domain/enums";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { GetPolls } from "../../actions/pollsActions";
import { connect, ConnectedProps } from "react-redux";
import Poll from "./poll";

const Body: React.FunctionComponent<RdxProps> = ({ getPolls }) => {
  React.useEffect(() => {
    getPolls(1, 15);
  }, []);

  return (
    <main id="main">
      <div className="container" data-test-id="body-polls">
        <Switch>
          <Route exact path="/polls" component={Polls} />
          <Route exact path="/polls/:poll_id" component={Poll} />
        </Switch>
      </div>
    </main>
  );
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    getPolls: (pageNumber: number, pageSize: number) =>
      dispatch(GetPolls(pageNumber, pageSize)),
  };
};

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type RdxProps = PropsFromRedux;

export default connector(Body);
