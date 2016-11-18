/* eslint-disable max-len, no-unused-expressions */
import React from "react";
import { mount, shallow, render } from "enzyme";

import Header from "../../../lib/components/header";

describe("Header", () => {

  describe("<header>", () => {
    it("accepts custom class name", () => {
      const header = shallow(<Header className="bigRed" />);
      expect(header.props().className).to.contain("bigRed");
    });

    it("has default theme prop of dark", () => {
      const header = mount(<Header />);
      expect(header.props().theme).to.equal("dark");
    });

    it("has default .isDark class name", () => {
      const header = shallow(<Header />);
      expect(header.props().className).to.contain("isDark");
    });
  });

  describe("company logo", () => {
    it("exists", () => {
      const headerSvg = render(<Header />).find("svg");
      expect(headerSvg).to.exist;
    });

    it("is a link", () => {
      const headerSvg = render(<Header />).find("svg");
      expect(headerSvg.parent().is("a")).to.equal(true);
    });

    it("has default styles", () => {
      const headerSvg = render(<Header />).find("svg");
      expect(headerSvg.find("[style]")).to.exist;
    });
  });

  describe("children", () => {
    it("links to Twitter and Github by default", () => {
      const headerLink = shallow(<Header />).find("a");
      expect(headerLink).to.have.length(3);
      expect(headerLink.at(1).prop("href")).to.equal("https://twitter.com/FormidableLabs");
      expect(headerLink.at(2).prop("href")).to.equal("https://github.com/FormidableLabs/");
    });

    it("accepts custom children", () => {
      const headerChild = shallow(<Header>Need help leveling up? Contact us!</Header>);
      expect(headerChild.text()).to.contain("Need help leveling up? Contact us!");
      expect(headerChild.find("a")).to.have.length(1);
    });
  });

  describe("props", () => {
    it("can change to light theme", () => {
      const header = shallow(<Header theme="light" />);
      expect(header.props().className).to.contain("isLight");
    });
  });
});
