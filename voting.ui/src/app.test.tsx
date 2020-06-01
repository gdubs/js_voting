import * as React from "react";
import { shallow } from "enzyme";
import App from "../src/app";
import { findByAttribute } from "./utils/findByAttribute";

describe("App loads", () => {
  let component: any;
  beforeEach(() => {
    component = shallow(<App />);
  });

  it("Should render the Header", () => {
    const wrapper = findByAttribute(component, "App");
    expect(wrapper.length).toBe(1);
  });
});
