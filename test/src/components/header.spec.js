import React from "react";
import { shallow, mount, render } from "enzyme";

import Header from "../../../src/components/header.jsx";

describe("Header component", () => {
  it("contains spec with an expectation", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.contains(<div className="foo" />)).toBe(true);
  });

  it("contains spec with an expectation", () => {
    expect(shallow(<Header />).is('.foo')).toBe(true);
  });

  it("contains spec with an expectation", () => {
    expect(mount(<Header />).find('.foo').length).toBe(1);
  });

  it("can run an expectation with render", () => {
    expect(render(<Header />).find('.foo').length).toBe(1);
  });
});
