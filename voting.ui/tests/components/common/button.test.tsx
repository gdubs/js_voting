import * as React from "react";
import { shallow } from "enzyme";
import { findByAttribute } from "../../../src/utils/findByAttribute";
import { Button } from "../../../src/components/common/button";

describe("<Button /> loads", () => {
  const mock = jest.fn();
  let component: any;

  beforeEach(() => {
    component = shallow(
      <Button clickHandler={mock} text={"Test"} btnStyle={""} />
    );
  });

  it("Should load the button", () => {
    const wrapper = findByAttribute(component, "button");
    expect(wrapper.length).toBe(1);
  });

  it("Should trigger click", () => {
    const wrapper = findByAttribute(component, "button");
    wrapper.simulate("click");
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
