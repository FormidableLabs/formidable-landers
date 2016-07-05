import React from "react";
import Radium from "radium";

import { BlackFormidableLogo, WhiteFormidableLogo } from "../assets/logos";

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={[
          this.props.baseStyles,
          {background: this.props.background}
        ]}>
        <span style={this.props.textStyles}>Made with love by</span>
        <span style={this.props.textStyles}>
          <a
            key="fl-logo"
            href="http://formidable.com/"
            style={this.props.unstyledLinkStyles}>
            <span style={this.props.logoWrapperStyles}>
              {this.props.logoColor === "white" ? WhiteFormidableLogo : BlackFormidableLogo}
            </span>
          </a>
        </span>
        <span style={this.props.textStyles}>
          P.S. <a
          key="fl-hiring"
          href="http://formidable.com/careers/"
          style={this.props.linkStyles}>
            We’re hiring
          </a>.
        </span>
        <span style={this.props.textStyles}>
          {this.props.children}
        </span>
      </footer>
    );
  }
}

Footer.propTypes = {
  background: React.PropTypes.string,
  baseStyles: React.PropTypes.object,
  textStyles: React.PropTypes.object,
  linkStyles: React.PropTypes.object,
  unstyledLinkStyles: React.PropTypes.object,
  logoWrapperStyles: React.PropTypes.object,
  logoColor: React.PropTypes.oneOf(["black", "white"]),
  children: React.PropTypes.node
};

Footer.defaultProps = {
  background: "#ebe3db",
  baseStyles: {
    flex: "none", // Sticky footer setup
    margin: "1rem 0 0 0",
    padding: "3rem 0.5rem",
    textAlign: "center",
    borderTop: "1px solid rgba(35, 31, 32, 0.02)"
  },
  textStyles: {
    display: "block"
  },
  linkStyles: {},
  unstyledLinkStyles: {
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
  logoWrapperStyles: {
    width: "300px",
    height: "100px"
  },
  logoColor: "black"
};

export default Radium(Footer); //eslint-disable-line new-cap
