import * as React from "react";
import Login from "../../../src/components/body/login";
import { shallow } from "enzyme";
import { findByAttribute } from "../../../src/utils/findByAttribute";

describe("<Login /> loads", () => {
  describe("Login should load", () => {
    let component: any;
    let wrapper: any;

    beforeEach(() => {
      component = shallow(<Login />);
    });

    it("Should load email textbox", () => {
      wrapper = findByAttribute(component, "login-email");
      expect(wrapper.length).toBe(1);
    });

    it("Should load password textbox", () => {
      wrapper = findByAttribute(component, "login-password");
      expect(wrapper.length).toBe(1);
    });
  });
  describe("Should successfully submit and get token", () => {
    it("Should successfully submit and return if email is invalid", () => {});
    it("Should successfully submit and return if password is invalid", () => {});
  });
});
