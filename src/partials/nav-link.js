import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NavLink extends Component {
  static displayName = 'NavLink';
  static propTypes = {
    className: PropTypes.string,
    current: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired,
    navItem: PropTypes.func.isRequired,
    onClick: PropTypes.func
  };

  render() {
    const { className, current, item, onClick, navItem } = this.props;
    const isActive = current === item.path ? 'active' : 'inactive';

    return React.cloneElement(
      navItem(item.path),
      {
        className: `${className} ${isActive}`,
        onClick
      },
      item.title
    );
  }
}
