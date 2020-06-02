import * as React from "react";
import { shallow } from "enzyme";
import App from "../src/app";
import { findByAttribute } from "../src/utils/findByAttribute";
import Header from "../src/components/header/header";
import Body from "../src/components/body/body";

describe("App loads", () => {
  let component: any;
  let wrapper: any;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it("Should render the Header", () => {
    expect(component.containsMatchingElement(<Header />)).toEqual(true);
  });

  it("Should render the Body", () => {
    expect(component.containsMatchingElement(<Body />)).toEqual(true);
  });
});
