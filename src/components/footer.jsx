import React from "react";
import Radium from "radium";

@Radium
class Footer extends React.Component {
  getFooterStyles() {
    return {
      base: {
        listStyle: "none",
        margin: "1rem 0 0 0",
        padding: "3rem 0.5rem",
        backgroundColor: this.props.backgroundColor,
        textAlign: "center",
        borderTop: "1px solid rgba(35, 31, 32, 0.02)"
      },
      text: {
        display: "block"
      },
      linkLogo: {
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
          Made with love in Seattle by
        </span>
        <span style={[footerStyles.text]}>
          <a href="http://formidable.com/" style={footerStyles.linkLogo}>
            <img width="300px" height="100px"
              src="static/logo-formidable-black.svg"
              alt="Formidable" />
          </a>
        </span>
        <span style={[footerStyles.text]}>
          P.S. <a href="http://formidable.com/studio/" style={{lineHeight: 1}}>We’re hiring</a>.
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
  styleOverrides: React.PropTypes.object
};

Footer.defaultProps = {
  backgroundColor: "#ebe3db",
  styleOverrides: null
};

export default Footer;
