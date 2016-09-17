/* eslint-disable max-len, no-unused-expressions */
import React from "react";
import { mount, shallow, render } from "enzyme";

import Header from "../../../lib/components/header";

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

    it("has default theme prop of dark", () => {
      const header = mount(<Header />);
      expect(header.props().theme).to.equal("dark");
    });

    it("has default styles for dark theme", () => {
      const headerStyle = shallow(<Header />).find("Style");
      const darkThemeLinkStyles = {
        textDecoration: "none",
        transition: "color 250ms ease-in, fill 300ms ease-in",
        color: "#fff"
      };
      expect(headerStyle.props().rules).to.have.property("a:link").that.deep.equals(darkThemeLinkStyles);
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
    it("accepts custom padding", () => {
      const headerContainer = shallow(<Header padding="20px 20px" />).find(".formidableHeader-container");
      expect(headerContainer.props().style).to.have.property("padding", "20px 20px");
    });

    it("can change to light theme", () => {
      const headerStyle = shallow(<Header theme="light" />).find("Style");
      const lightVisitedLinkStyles = {
        color: "#242121"
      };
      expect(headerStyle.props().rules).to.have.property("a:visited").that.deep.equals(lightVisitedLinkStyles);
    });
  });
});
