import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NavLink extends Component {
  static displayName = "NavLink";
  static propTypes = {
    className: PropTypes.string,
    current: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func
  };

  render() {
    const { className, current, item, onClick } = this.props;
    const isActive = current === item.path ? "active" : "inactive";
    return (
      <a 
        href={item.path}
        className={`${className} ${isActive}`}
        onClick={onClick}
      >
        {item.title}
      </a>
    );
  }
}
