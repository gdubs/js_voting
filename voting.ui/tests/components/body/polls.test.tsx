import * as React from "react";
import { shallow, mount } from "enzyme";
import Polls from "../../../src/components/body/polls";
import { IPoll } from "../../../src/domain/types";
import { findByAttribute } from "../../../src/utils/findByAttribute";
import { Button } from "../../../src/components/common/button";

interface IProps {
  polls: IPoll[];
}

describe("<Polls /> loads", () => {
  let component: any;
  let wrapper: any;
  let props: IProps;

  beforeEach(() => {
    props = { polls: [{ id: 1, name: "Election 1", status: "Pending" }] };
    component = mount(<Polls {...props} />);
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
  // wait for redux
  //   it("Should display the poll when a new one is added");
});
