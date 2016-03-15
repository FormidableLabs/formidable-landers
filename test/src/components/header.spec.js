import React from "react";
import { shallow } from "enzyme";

import Header from "../../../src/components/header.jsx";

describe("Header", () => {

  describe("<header>", () => {
    it("has default styles", () => {
      const header = shallow(<Header />);
      expect(header.props()).to.have.property("style");
    });

    it("accepts custom styles", () => {
      const header = shallow(<Header styleOverrides={{textAlign: "left"}} />);
      expect(header.props().style).to.have.property("textAlign", "left");
    });
  });

  describe("call to action", () => {
    it("is a mailto:hello@formidable.com link", () => {
      const headerLink = shallow(<Header />).find('a');
      expect(headerLink).to.have.length(1);
      expect(headerLink.props()).to.have.property("href", "mailto:hello@formidable.com");
    });

    it("has a default message", () => {
      const headerLink = shallow(<Header />).find('a');
      expect(headerLink.text()).to.equal("Need React.js consulting? Let’s talk.");
    });

    it("accepts a custom message", () => {
      const headerLink = shallow(<Header>Need help leveling up? Contact us!</Header>).find('a');
      expect(headerLink.text()).to.equal("Need help leveling up? Contact us!");
      expect(headerLink.props()).to.have.property("href", "mailto:hello@formidable.com");
    });

    it("has default styles", () => {
      const headerLink = shallow(<Header />).find('a');
      expect(headerLink.props()).to.have.property("style");
    });

    it("accepts custom styles", () => {
      const headerLink = shallow(<Header linkStyles={{lineHeight: 2}} />).find('a');
      expect(headerLink.props().style).to.have.property("lineHeight", 2);
    });
  });
});
