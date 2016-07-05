/* eslint-disable max-len, no-unused-expressions */
import React from "react";
import { shallow } from "enzyme";

import Footer from "../../../src/components/footer";
import { BlackFormidableLogo, WhiteFormidableLogo } from "../../../src/assets/logos";

describe("Footer", () => {

  describe("<footer>", () => {
    it("has default styles", () => {
      const footer = shallow(<Footer />);
      const defaultStyles = {
        flex: "none",
        WebkitFlex: "none",
        msFlex: "none",
        margin: "1rem 0 0 0",
        padding: "3rem 0.5rem",
        textAlign: "center",
        borderTop: "1px solid rgba(35, 31, 32, 0.02)",
        background: "#ebe3db"
      };
      expect(footer.props().style).to.deep.equal(defaultStyles);
    });

    it("accepts custom styles", () => {
      const footer = shallow(<Footer baseStyles={{margin: "20px 40px 60px"}} />);
      expect(footer.props().style).to.have.property("margin", "20px 40px 60px");
    });
  });

  describe("company logo", () => {
    it("links to our homepage", () => {
      const footerLinks = shallow(<Footer />).find("a");
      expect(footerLinks.first().props()).to.have.property("href", "http://formidable.com/");
    });

    it.skip("is black by default", () => {
      const footer = shallow(<Footer/>);
      // This should work but enzyme cannot find the component
      // see http://airbnb.io/enzyme/docs/api/ShallowWrapper/find.html#examples
      expect(footer.find(BlackFormidableLogo)).to.have.length(1);
      expect(footer.find(WhiteFormidableLogo)).to.have.length(0);
    });

    it.skip("can be white", () => {
      const footer = shallow(<Footer logoColor="white"/>);
      // This should work but enzyme cannot find the component
      // see http://airbnb.io/enzyme/docs/api/ShallowWrapper/find.html#examples
      expect(footer.find(BlackFormidableLogo)).to.have.length(0);
      expect(footer.find(WhiteFormidableLogo)).to.have.length(1);
    });
  });

  describe("hiring call to action", () => {
    it("links to our careers page", () => {
      const hiringLink = shallow(<Footer />).find("a").last();
      expect(hiringLink.props()).to.have.property("href", "http://formidable.com/careers/");
    });

    it("has default styles", () => {
      const hiringLink = shallow(<Footer />).find("a").last();
      expect(hiringLink.props()).to.have.property("style");
    });

    it("accepts custom styles", () => {
      const hiringLink = shallow(<Footer linkStyles={{boxShadow: "inset -0.1em gold"}}/>).find("a").last();
      expect(hiringLink.props().style).to.have.property("boxShadow", "inset -0.1em gold");
    });
  });

  describe("footnote", () => {
    it("is empty by default", () => {
      const footer = shallow(<Footer />);
      expect(footer.children().at(3).text()).to.be.empty;
    });

    it("accepts a custom message", () => {
      const footer = shallow(<Footer>Formidable means “wonderful” in French. Do we look French to you?</Footer>);
      expect(footer.text()).to.contain("Formidable means “wonderful” in French. Do we look French to you?");
    });
  });
});
