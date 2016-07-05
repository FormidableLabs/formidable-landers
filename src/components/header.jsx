import React from "react";
import Radium from "radium";

class Header extends React.Component {
  render() {
    return (
      <header style={[
        this.props.baseStyles,
        {background: this.props.background}
      ]}>
        <span style={this.props.linkWrapperStyles}>
          <a
          key="fl-header"
          href="http://formidable.com/careers/"
          style={this.props.linkStyles}>
            {this.props.children}
          </a>
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  background: React.PropTypes.string,
  baseStyles: React.PropTypes.object,
  linkStyles: React.PropTypes.object,
  linkWrapperStyles: React.PropTypes.object,
  children: React.PropTypes.node
};

Header.defaultProps = {
  background: "#ebe3db",
  baseStyles: {
    flex: "none",  // Sticky footer setup
    margin: 0,
    padding: "1rem 0.5rem",
    textAlign: "center",
    borderBottom: "1px solid rgba(35, 31, 32, 0.02)"
  },
  linkStyles: {
    margin: "0 auto",
    lineHeight: 1
  },
  linkWrapperStyles: {
    display: "block",
    margin: "0 auto"
  },
  children: "We’re hiring!"
};

export default Radium(Header); //eslint-disable-line new-cap
