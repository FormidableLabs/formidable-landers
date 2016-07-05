import React from "react";
import Radium from "radium";

class Header extends React.Component {
  getHeaderStyles() {
    return {
      base: {
        flex: "none",  // Sticky footer setup
        margin: 0,
        padding: "1rem 0.5rem",
        background: this.props.background,
        textAlign: "center",
        borderBottom: "1px solid rgba(35, 31, 32, 0.02)"
      },
      link: {
        margin: "0 auto",
        lineHeight: 1
      },
      linkStyles: this.props.linkStyles,
      styleOverrides: this.props.styleOverrides
    };
  }

  render() {
    const headerStyles = this.getHeaderStyles();
    return (
      <header
        style={[
          headerStyles.base,
          this.props.styleOverrides && headerStyles.styleOverrides
        ]}>
        <span style={{display: "block", margin: "0 auto"}}>
          <a
          key="fl-header"
          href="http://formidable.com/careers/"
          style={[
            headerStyles.link,
            this.props.linkStyles && headerStyles.linkStyles
          ]}>
            {this.props.children}
          </a>
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  background: React.PropTypes.string,
  children: React.PropTypes.node
};

Header.defaultProps = {
  background: "#ebe3db",
  children: "We’re hiring!"
};

export default Radium(Header); //eslint-disable-line new-cap
