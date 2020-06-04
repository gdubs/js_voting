import * as React from "react";
import { shallow } from "enzyme";
import { findByAttribute } from "../../../src/utils/findByAttribute";
import Body from "../../../src/components/body/body";
import Polls from "../../../src/components/body/polls";
import { IPoll } from "../../../src/domain/types";
import { VoteStatus } from "../../../src/domain/enums";

interface IProps {
  polls: IPoll[];
}

describe("<Body /> loads", () => {
  let component: any;
  let wrapper: any;
  beforeEach(() => {
    component = shallow(<Body />);
  });
  it("Should load Polls", () => {
    const props: IProps = {
      polls: [{ id: 1, name: "Election 1", status: VoteStatus.OPEN }],
    };
    wrapper = component.find(Polls);
    expect(wrapper.length).toBe(1);
  });

  // it should load a different thing when logged out.....
});
