import React from "react";
import Radium from "radium";

import { BlackFormidableLogo, WhiteFormidableLogo } from "../assets/logos";

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={this.props.footerStyles}>
        <span style={this.props.footerTextStyles}>Made with love by</span>
        <span style={this.props.footerTextStyles}>
          <a
            key="fl-logo"
            href="http://formidable.com/"
            style={this.props.footerUnstyledLink}>
            <span style={{width: "300px", height: "100px"}}>
              {this.props.logoColor === "white" ? WhiteFormidableLogo : BlackFormidableLogo}
            </span>
          </a>
        </span>
        <span style={this.props.footerTextStyles}>
          P.S. <a
          key="fl-hiring"
          href="http://formidable.com/careers/"
          style={this.props.footerLinkStyles}>
            We’re hiring
          </a>.
        </span>
        <span style={this.props.footerTextStyles}>
          {this.props.children}
        </span>
      </footer>
    );
  }
}

Footer.propTypes = {
  footerStyles: React.PropTypes.object,
  footerTextStyles: React.PropTypes.object,
  footerUnstyledLinkStyles: React.PropTypes.object,
  footerLinkStyles: React.PropTypes.object,
  logoColor: React.PropTypes.oneOf(["black", "white"])
};

Footer.defaultProps = {
  footerStyles: {
    flex: "none", // Sticky footer setup
    margin: "1rem 0 0 0",
    padding: "3rem 0.5rem",
    background: "#ebe3db",
    textAlign: "center",
    borderTop: "1px solid rgba(35, 31, 32, 0.02)"
  },
  footerTextStyles: {
    display: "block"
  },
  footerUnstyledLinkStyles: {
    display: "block",
    boxShadow: "none",
    border: "none",
    textDecoration: "none",
    ":hover": {
      background: "transparent",
      boxShadow: "none",
      border: "none",
      textDecoration: "none"
    }
  },
  logoColor: "black"
};

export default Radium(Footer); //eslint-disable-line new-cap
