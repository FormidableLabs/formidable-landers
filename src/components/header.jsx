import React from "react";
import Radium from "radium";

class Header extends React.Component {
  render() {
    return (
      <header style={this.props.headerStyles}>
        <span style={this.props.headerLinkWrapperStyles}>
          <a
          key="fl-header"
          href="http://formidable.com/careers/"
          style={this.props.headerLinkStyles}>
            {this.props.children}
          </a>
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  styles: React.PropTypes.object,
  children: React.PropTypes.node
};

Header.defaultProps = {
  headerStyles: {
    flex: "none",  // Sticky footer setup
    margin: 0,
    padding: "1rem 0.5rem",
    background: "#ebe3db",
    textAlign: "center",
    borderBottom: "1px solid rgba(35, 31, 32, 0.02)"
  },
  headerLinkStyles: {
    margin: "0 auto",
    lineHeight: 1
  },
  headerLinkWrapperStyles: {
    display: "block",
    margin: "0 auto"
  },
  children: "We’re hiring!"
};

export default Radium(Header); //eslint-disable-line new-cap
