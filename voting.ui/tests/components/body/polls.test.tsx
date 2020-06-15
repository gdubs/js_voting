import * as React from "react";
import { shallow, mount } from "enzyme";
import Polls from "../../../src/components/body/polls";
import { IPoll } from "../../../src/domain/types";
import { findByAttribute } from "../../../src/utils/findByAttribute";
import { Button } from "../../../src/components/common/button";
import { VoteStatus } from "../../../src/domain/enums";
import { Provider } from "react-redux";
import { IAppState, IPollState } from "../../../src/store/store.interfaces";
import configureStore from "redux-mock-store";

interface IProps {
  polls: IPoll[];
}

describe("<Polls /> loads", () => {
  let component: any;
  let wrapper: any;
  let props: IProps;
  let store: any;
  const mockStore = configureStore();

  beforeEach(() => {
    let pollsState: IPollState = {
      polls: [
        {
          pollId: "iddddd_1",
          name: "Election 1",
          status: VoteStatus.OPEN,
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
        <Polls {...props} />
      </Provider>
    );
  });

  it("Should load a list of polls", () => {
    wrapper = findByAttribute(component, "poll-name");
    expect(wrapper.text()).toEqual("Election 1");
  });

  it("Should load action button and trigger clickHandler", () => {
    const mock = jest.fn();
    component.find(Button).props().clickHandler = mock;
    component.find(Button).props().clickHandler();
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("Should update showPopup");

  // wait for redux
  //   it("Should display the poll when a new one is added");
});
