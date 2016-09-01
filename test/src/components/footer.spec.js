/* eslint-disable max-len, no-unused-expressions */
import React from "react";
import { mount, render, shallow } from "enzyme";

import Footer from "../../../lib/components/footer";

describe("Footer", () => {

  describe("<footer>", () => {
    it.skip("has default styles", () => {
      const footer = shallow(<Footer />);
      expect(footer.props()).to.have.property("style");
    });

    it("accepts custom styles", () => {
      const footer = shallow(<Footer style={{margin: "20px 40px 60px"}} />);
      expect(footer.props().style).to.have.property("margin", "20px 40px 60px");
    });

    it("has default theme prop of dark", () => {
      const footer = mount(<Footer />);
      expect(footer.props().theme).to.equal("dark");
    });

    it("has default styles for dark theme", () => {
      const footerStyle = shallow(<Footer />).find("Style");
      const darkThemeLinkStyles = {
        textDecoration: "none",
        transition: "color 250ms ease-in, fill 300ms ease-in",
        color: "#fff",
        fill: "#fff"
      };
      expect(footerStyle.props().rules).to.have.property("a:link").that.deep.equals(darkThemeLinkStyles);
    });
  });

  describe("company logo", () => {
    it("exists", () => {
      const footerSvg = render(<Footer />).find("svg");
      expect(footerSvg).to.exist;
    });

    it("is a link", () => {
      const footerSvg = render(<Footer />).find("svg");
      expect(footerSvg.parent().is("a")).to.equal(true);
    });

    it("has default styles", () => {
      const footerSvg = render(<Footer />).find("svg");
      expect(footerSvg.find("[style]")).to.exist;
    });
  });

  describe("children", () => {
    it("by default has links", () => {
      const footer = shallow(<Footer />);
      expect(footer.children()).to.exist;
      expect(footer.children().find("a")).to.exist;
    });

    it("accepts a custom message", () => {
      const footer = shallow(<Footer>Formidable means “wonderful” in French. Do we look French to you?</Footer>);
      expect(footer.props().children).to.contain("Formidable means “wonderful” in French. Do we look French to you?");
    });
  });
});
