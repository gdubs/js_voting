import * as React from "react";
import { shallow } from "enzyme";
import Header from "../../../src/components/header/header";
import { findByAttribute } from "../../../src/utils/findByAttribute";

describe("<Header />loads", () => {
  let component: any;
  let wrapper: any;
  beforeEach(() => {
    component = shallow(<Header />);
  });

  it("Should load the logo", () => {
    wrapper = findByAttribute(component, "header-logo");
    expect(wrapper.length).toBe(1);
  });

  it("Should load the login link", () => {
    wrapper = findByAttribute(component, "header-login");
    expect(wrapper.text()).toBe("Login");
  });
});
