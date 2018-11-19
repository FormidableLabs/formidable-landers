import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NavLink extends Component {
  static displayName = "NavLink";
  static propTypes = {
    Tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
    className: PropTypes.string,
    current: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    item: PropTypes.object.isRequired,
    linkRenderer: PropTypes.func,
    onClick: PropTypes.func
  };

  handleLinkRenderer(props) {
    const { className, current, item, onClick, isActive } = props;
    const activeClass = isActive ? "active" : "inactive";
    return this.props.linkRenderer ? (
      this.props.linkRenderer({ ...props, isActive })
    ) : (
      <a href={item.path} className={`${className} ${isActive}`} onClick={onClick}>
        {item.title}
      </a>
    );
  }

  render() {
    const {
      className,
      current,
      item,
      onClick,
      isActive = this.props.current === this.props.item.path
    } = this.props;
    return this.handleLinkRenderer({ ...this.props });
  }
}
