import * as React from "react";
import { shallow, mount } from "enzyme";
import Poll from "../../../src/components/body/poll";
import { findByAttribute } from "../../../src/utils/findByAttribute";
import { IPoll } from "../../../src/domain/types";
import { VoteStatus } from "../../../src/domain/enums";

describe("<Poll /> renders", () => {
  describe("Poll should show poll / voting options", () => {
    let component: any;
    let wrapper: any;
    let poll: IPoll;

    beforeEach(() => {
      poll = {
        pollId: "poll_id",
        name: "poll name",
        voteStatus: VoteStatus.NOT_VOTED,
        options: [{ pollOptionId: "poll_option_id_1", name: "Option 1" }],
      };
      component = shallow(<Poll poll={poll} />);
    });
    it("Should render component", () => {
      wrapper = findByAttribute(component, "poll-component");
      expect(wrapper.length).toBe(1);
    });
    it("Should list all options", () => {
      wrapper = findByAttribute(
        component,
        `${poll.options[0].pollOptionId}_${poll.pollId}`
      );
      expect(wrapper.length).toBe(1);
    });
    it("Should enable vote buttons");
  });
  describe("Poll should be able to submit vote", () => {
    beforeEach(() => {});
    it("Should be able to pick valid option");
    it("Should ask to confirm choice");
    it("Should show that vote was cast");
  });
});
