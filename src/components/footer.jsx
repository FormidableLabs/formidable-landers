import React from "react";
import Radium from "radium";

import { BlackFormidableLogo, WhiteFormidableLogo } from "../assets/logos";

@Radium
class Footer extends React.Component {
  getFooterStyles() {
    return {
      base: {
        flex: "none", // Sticky footer setup
        margin: "1rem 0 0 0",
        padding: "3rem 0.5rem",
        backgroundColor: this.props.backgroundColor,
        textAlign: "center",
        borderTop: "1px solid rgba(35, 31, 32, 0.02)"
      },
      text: {
        display: "block"
      },
      unstyledLink: {
        display: "block",
        boxShadow: "none",
        border: "none",
        textDecoration: "none",
        ":hover": {
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "none",
          textDecoration: "none"
        }
      },
      linkStyles: this.props.linkStyles,
      styleOverrides: this.props.styleOverrides
    };
  }

  render() {
    const footerStyles = this.getFooterStyles();
    return (
      <footer
        style={[
          footerStyles.base,
          this.props.styleOverrides && footerStyles.styleOverrides
        ]}>
        <span style={[footerStyles.text]}>
          Made with love by
        </span>
        <span style={[footerStyles.text]}>
          <a
            key="fl-logo"
            href="http://formidable.com/"
            style={footerStyles.unstyledLink}>
            <span style={{width: "300px", height: "100px"}}>
              {this.props.logoColor === "white" ? WhiteFormidableLogo : BlackFormidableLogo}
            </span>
          </a>
        </span>
        <span style={[footerStyles.text]}>
          P.S. <a
          key="fl-hiring"
          href="http://formidable.com/team/"
          style={[this.props.linkStyles && footerStyles.linkStyles]}>
            We’re hiring
          </a>.
        </span>
        <span style={[footerStyles.text]}>
          {this.props.children}
        </span>
      </footer>
    );
  }
}

Footer.propTypes = {
  backgroundColor: React.PropTypes.string,
  logoColor: React.PropTypes.oneOf(["black", "white"])
};

Footer.defaultProps = {
  backgroundColor: "#ebe3db",
  logoColor: "black"
};

export default Footer;
