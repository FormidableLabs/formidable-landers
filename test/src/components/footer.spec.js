/* eslint-disable max-len, no-unused-expressions */
import React from "react";
import { mount, render, shallow } from "enzyme";

import Footer from "../../../lib/components/footer";

describe("Footer", () => {

  describe("<footer>", () => {
    it("accepts custom class name", () => {
      const footer = shallow(<Footer className="bigRed" />);
      expect(footer.props().className).to.contain("bigRed");
    });

    it("has default theme prop of dark", () => {
      const footer = mount(<Footer />);
      expect(footer.props().theme).to.equal("dark");
    });

    it("has default .isDark class name", () => {
      const footer = shallow(<Footer />);
      expect(footer.props().className).to.contain("isDark");
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
      const footer = shallow(<Footer>Formidable means “wonderful” in French. Do we look French to you?</Footer>).find(".formidableFooter-container");
      expect(footer.props().children).to.contain("Formidable means “wonderful” in French. Do we look French to you?");
    });
  });
});
