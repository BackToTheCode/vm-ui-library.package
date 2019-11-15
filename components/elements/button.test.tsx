  
import { shallow } from "enzyme";
import React from "react";

import Button from "./button";

describe("With Enzyme", () => {
  it('Button is displayed', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button').exists()).toBeTruthy()
  });
});