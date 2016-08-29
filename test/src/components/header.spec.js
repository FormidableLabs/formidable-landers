/* eslint-disable max-len, no-unused-expressions */
import React from "react";
import { shallow } from "enzyme";

import Header from "../../../src/components/header";

describe("Header", () => {

  describe("<header>", () => {
    it("has default styles", () => {
      const header = shallow(<Header />);
      expect(header.props()).to.have.property("style");
    });

    it("accepts custom styles", () => {
      const header = shallow(<Header style={{textAlign: "left"}} />);
      expect(header.props().style).to.have.property("textAlign", "left");
    });
  });

  describe("logo", () => {
    it("links to our open source page", () => {
      const firstLink = shallow(<Header />).find("a").at(0);
      expect(firstLink.props()).to.have.property("href", "https://formidable.com/open-source/");
    });

    it("has default styles", () => {
      const firstLink = shallow(<Header />).find("a").at(0);
      expect(firstLink.props()).to.have.property("style");
    });
  });

  describe("children", () => {
    it("links to Twitter and Github by default", () => {
      const headerLink = shallow(<Header />).find("a");
      expect(headerLink).to.have.length(3);
      expect(headerLink.at(1).text()).to.equal("Twitter");
      expect(headerLink.at(2).text()).to.equal("Github");
    });

    it("accepts custom children", () => {
      const headerChild = shallow(<Header>Need help leveling up? Contact us!</Header>);
      expect(headerChild.text()).to.contain("Need help leveling up? Contact us!");
      expect(headerChild.find("a")).to.have.length(1);
    });
  });

  describe("props", () => {
    it("accepts custom padding", () => {
      const headerLink = shallow(<Header padding="20px 20px" />);
      expect(headerLink.props().style).to.have.property("padding", "20px 20px");
    });

    it("can change to light theme", () => {
      const headerStyle = shallow(<Header theme="light" />).find("Style");
      const lightVisitedLinkStyles = {
        color: "#242121",
        fill: "#242121"
      };
      expect(headerStyle.props().rules).to.have.property("a:visited", lightVisitedLinkStyles);
    });
  });
});
