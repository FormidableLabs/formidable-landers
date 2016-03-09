import React from "react";
import { shallow, render } from "enzyme";

import Footer from "../../../src/components/footer.jsx";
import { BlackFormidableLogo, WhiteFormidableLogo } from "../../../src/assets/logos.jsx";

describe("Footer", () => {

  describe("<footer>", () => {
    it("has default styles", () => {
      const footer = shallow(<Footer />);
      expect(footer.props()).to.have.property("style");
    });

    it("accepts custom styles", () => {
      const footer = shallow(<Footer styleOverrides={{margin: "20px 40px 60px"}} />);
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
      expect(hiringLink.props()).to.have.property("href", "http://formidable.com/team/");
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
