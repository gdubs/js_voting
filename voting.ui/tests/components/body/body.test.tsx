import * as React from "react";
import { shallow, mount } from "enzyme";
import { findByAttribute } from "../../../src/utils/findByAttribute";
import Body from "../../../src/components/body/body";
import Polls from "../../../src/components/body/polls";
import { IPoll } from "../../../src/domain/types";
import { VoteStatus } from "../../../src/domain/enums";
import { Provider } from "react-redux";
import { IAppState, IPollState } from "../../../src/store/store.interfaces";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

interface IProps {
  polls: IPoll[];
}

describe("<Body /> loads", () => {
  let component: any;
  let wrapper: any;
  let store: any;
  const mockStore = configureStore([thunk]); // need to add thunk to avoid Actions must be plain objects error

  beforeEach(() => {
    let pollsState: IPollState = {
      polls: [
        {
          pollId: "idddddd_1",
          name: "Election 1",
          voteStatus: VoteStatus.NOT_VOTED,
          options: [],
        },
      ],
      poll: null,
      pollsPageUI: { pageNumber: 1, pageSize: 15, totalPageNumber: 0 },
    };

    const initialState: IAppState = { pollsState };

    store = mockStore(initialState);

    component = mount(
      <Provider store={store}>
        <Body />
      </Provider>
    );
  });
  it("Should load Polls", () => {
    wrapper = component.find(Body);
    expect(wrapper.length).toBe(1);
  });

  // it should load a different thing when logged out.....
});
