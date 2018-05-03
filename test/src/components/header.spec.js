/* eslint-disable max-len, no-unused-expressions */
import React from "react";
import { mount, shallow, render } from "enzyme";

import Header from "../../../lib/components/header";

describe("Header", () => {
  describe("<header>", () => {
    it("accepts custom class name", () => {
      const header = shallow(<Header className="bigRed" />).find("header");
      expect(header.props().className).to.contain("bigRed");
    });

    it("has default theme prop of dark", () => {
      const header = mount(<Header />);
      expect(header.props().theme).to.equal("dark");
    });

    it("has default .isDark class name", () => {
      const header = shallow(<Header />).find("header");
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
      const headerLink = shallow(<Header />).find("header").find("a");
      expect(headerLink).to.have.length(2);
      expect(headerLink.at(0).prop("href")).to.equal("https://twitter.com/FormidableLabs");
      expect(headerLink.at(1).prop("href")).to.equal("https://github.com/FormidableLabs/");
    });

    it("accepts custom children", () => {
      const headerChild = shallow(<Header>Need help leveling up? Contact us!</Header>);
      expect(headerChild.find("header").text()).to.contain("Need help leveling up? Contact us!");
      expect(headerChild.find("a")).to.have.length(0);
    });
  });

  describe("props", () => {
    it("can change to light theme", () => {
      const header = shallow(<Header theme="light" />).find("header");
      expect(header.props().className).to.contain("isLight");
    });
  });

  describe("closes mobile menu on resize to desktop width", () => {
    let OrigWindowWidth;
    let mobileWidth = 400;
    let desktopWidth = 1400;

    before(() => {
      OrigWindowWidth = window.innerWidth;
    }); 

    after(() => {
      window.innerWidth = OrigWindowWidth;
    });

    it("resize window to mobile size", () => {  
      let header = mount(<Header />);
      /* Force page to a width of 400px */      
      window.innerWidth = mobileWidth; 
      expect(window.innerWidth).to.equal(mobileWidth);

      /* Button exists */
      expect(header.find("button").text()).to.contain("Menu");

      /* click on button */
      header.find("button").simulate("click");
      expect(header.find("nav").at(1).prop("aria-hidden")).to.equal(false);

      /* Force page to a width of 1400px */      
      window.innerWidth = desktopWidth;
      expect(window.innerWidth).to.equal(desktopWidth);

      /* menu should have closed */
      header.find("button").simulate("click");
      expect(header.find("nav").at(1).prop("aria-hidden")).to.equal(true);
    });
  });
});