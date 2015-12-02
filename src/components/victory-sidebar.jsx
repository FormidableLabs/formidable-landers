import React from "react";
import Radium from "radium";

import settings from "../themes/victory-settings";

@Radium
class Sidebar extends React.Component {

  getSidebarStyles() {
    return {
      base: {
        margin: 0,
        padding: "0 1rem 0 0",
        "@media (min-width: 70em)": {
          flex: "0 0 12em"
        }
      },
      list: {
        margin: "0",
        padding: "6px",
        listStyle: "none"
      },
      listItem: {
        marginTop: "0.3em",
        position: "relative",
        lineHeight: 1.4
      },
      openList: {
        margin: "0",
        padding: "0 0 0 1rem",
        listStyle: "none",
        fontSize: "0.9rem",
        color: settings.navy
      },
      selectedItem: {
        color: settings.navy
      },
      selectedLink: {
        color: settings.red,
        fontWeight: "bold"
      },
      link: {
        boxShadow: "none",
        color: settings.darkSand,
        fontWeight: "normal",
        ":hover": {
          color: settings.red
        }
      }
    };
  }

  _renderListItems(items) {
    const styles = this.getSidebarStyles();

    return items.map((item) => {
      const isSelected = item.slug === this.props.active;
      const itemStyles = isSelected ?
        [styles.listItem, styles.selectedItem] :
        styles.listItem;
      const linkStyles = isSelected ?
        [styles.link, styles.selectedLink] :
        styles.link;

      return (
        <li style={itemStyles} key={item.slug}>
          <RadiumLink to={`docs${item.slug}`} style={linkStyles}>
            {item.text}
          </RadiumLink>
        </li>
      );
    });
  }

  render() {
    const styles = this.getSidebarStyles();

    /* eslint-disable max-len */
    return (
      <nav
        className="Nav"
        style={styles.base}>
        <a href="/" className="Link--unstyled">
          <img width="40px" height="40px" src="/static/icon-victory.svg" alt="Victory Homepage" />
        </a>
        <ul style={styles.list}>
          {this._renderListItems(this.props.items)}
        </ul>
      </nav>
    );
  /* eslint-enable max-len */
  }
}
Sidebar.propTypes = {
  items: React.PropTypes.array
};

Sidebar.defaultProps = {
  items: []
};

export default Sidebar;
