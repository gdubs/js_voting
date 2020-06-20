import * as React from "react";
import { shallow, mount } from "enzyme";
import Poll from "../../../src/components/body/poll";
import { findByAttribute } from "../../../src/utils/findByAttribute";
import { IPoll } from "../../../src/domain/types";
import { VoteStatus } from "../../../src/domain/enums";
import { Button } from "../../../src/components/common/button";
import configureStore from "redux-mock-store";
import { IPollState, IAppState } from "../../../src/store/store.interfaces";
import { Provider } from "react-redux";

describe("<Poll /> renders", () => {
  describe("Poll should show poll / voting options", () => {
    let component: any;
    let wrapper: any;
    let poll: IPoll;
    let store: any;
    const mockStore = configureStore();

    beforeEach(() => {
      poll = {
        poll_id: "poll_id",
        name: "poll name",
        voteStatus: VoteStatus.NOT_VOTED,
        options: [
          {
            pollOptionId: "poll_option_id_1",
            name: "Option 1",
            selected: false,
          },
        ],
        canSelectMultiple: false,
      };

      let pollsState: IPollState = {
        polls: [],
        poll: null,
        pollsPageUI: { pageNumber: 1, pageSize: 15, totalPageNumber: 100 },
      };
      const initialState: IAppState = { pollsState };
      store = mockStore(initialState);

      component = shallow(
        <Provider store={store}>
          <Poll />
        </Provider>
      );
    });

    it("Should render component", () => {
      wrapper = findByAttribute(component, "poll-component");
      expect(wrapper.length).toBe(1);
    });

    it("Should list all options", () => {
      wrapper = findByAttribute(
        component,
        `${poll.options[0].pollOptionId}_${poll.poll_id}`
      );
      expect(wrapper.length).toBe(1);
    });
  });
  describe("Poll should be able to submit vote", () => {
    let component: any;
    let wrapper: any;
    let poll: IPoll;

    beforeEach(() => {
      poll = {
        poll_id: "poll_id",
        name: "poll name",
        voteStatus: VoteStatus.VOTED,
        options: [
          {
            pollOptionId: "poll_option_id_1",
            name: "Option 1",
            selected: false,
          },
        ],
        canSelectMultiple: false,
      };
      component = mount(<Poll poll={poll} />);
    });

    it("Should enable vote buttons if not voted", () => {
      wrapper = component.find(Button);
      //   console.log(wrapper.debug());
      expect(wrapper.find("button").length).toBe(1);
    });

    it("Should be able to pick valid option", () => {});
    it("Should ask to confirm choice");
    it("Should show that vote was cast");
  });
});
