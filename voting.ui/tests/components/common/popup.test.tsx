import * as React from "react";
import { shallow } from "enzyme";
import { Popup } from "../../../src/components/common/popup";
import { findByAttribute } from "../../../src/utils/findByAttribute";
 

describe('<Popup/>', () => {

    const mock = jest.fn();
    let component: any;
    let wrapper: any;

    beforeEach(() => {
        wrapper = null;
        component = shallow(
            <Popup closedPopupHandler={mock} content={'Test content'}/>
        );
    });
    
    it('Should load the popup', () => {
        wrapper = findByAttribute(component, "popup");
        expect(wrapper.length).toBe(1);
    })
    it('Should load the contents', () => {
        wrapper = component.find(".popup-inside");
        expect(wrapper.text()).toEqual('Test content');
    })
    it('Should trigger the closehandler onclick of the button', () => {
        wrapper = findByAttribute(component, "popup-close");
        wrapper.simulate('click');
        expect(mock.mock.calls.length).toEqual(1);
    })
});