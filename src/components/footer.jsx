import React from "react";
import Radium from "radium";

// Assets
import LOGOLIGHT from "../assets/logo-light.svg";
// import LOGODARK from "../assets/logo-dark.svg";
// import LOGOOSSLIGHT from "../assets/logo-oss-light.svg";
// import LOGOOSSDARK from "../assets/logo-oss.svg";

class Footer extends React.Component {
  getFooterStyles() {
    return {
      base: {
        flex: "none", // Sticky footer setup
        margin: "1rem 0 0 0",
        padding: "3rem 0.5rem",
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
          background: "transparent",
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
          { background: this.props.background },
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
            <div
              style={{fill: "#fff", width: "300px", height: "50px", margin: "0 auto"}}
              dangerouslySetInnerHTML={{ __html: LOGOLIGHT }}
            />
          </a>
        </span>
        <span style={[footerStyles.text]}>
          P.S. <a
          key="fl-hiring"
          href="http://formidable.com/careers/"
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
  background: React.PropTypes.string,
  logoColor: React.PropTypes.oneOf(["black", "white"])
};

Footer.defaultProps = {
  background: "#242121",
  logoColor: "black"
};

export default Radium(Footer); //eslint-disable-line new-cap
