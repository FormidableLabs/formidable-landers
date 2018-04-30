import React from "react";

// Assets
import LOGO_OSS from "../assets/logo-oss.svg";
import LOGO_GITHUB from "../assets/logo-github.svg";
import LOGO_TWITTER from "../assets/logo-twitter.svg";
import styles from "../styles/header.css"; // eslint-disable-line no-unused-vars

// Formidable Header
import FormidableHeader from "./formidable-header";
import BodyClassName from "./body-class-name";


class Header extends React.Component {
  constructor(props) {
    super(props);
    // Fade in the very first page after load.
    this.state = {
      pageClass: "",
      navOpen: false
    };
  }

  /* eslint-disable no-invalid-this */
  handleToggleMenu = navOpen => {
    this.setState({
      navOpen
    });
    this.toggleBodyClasses(navOpen);
  };
  /*eslint-enable no-invalid-this */

  toggleBodyClasses(navOpen) {
    console.log("toggling");
    const isOpenClass = "js-menu--is-open";

    if (navOpen) {
      const initialPageClass = this.state.pageClass;
      // Menu is opening, add isOpening class
      this.setState({
        pageClass: `${initialPageClass} ${isOpenClass}`
      });
    } else {
      this.setState({
        pageClass: ""
      });
    }
  }

  render() {
    let classes = "formidableHeader";
    if (this.props.theme === "light") {
      classes = `${classes} isLight`;
    } else {
      classes = `${classes} isDark`;
    }
    if (this.props.className) {
      classes = `${classes} ${this.props.className}`;
    }

    return (
      <div>
      <BodyClassName className={this.state.pageClass} />
      <FormidableHeader 
        onToggleMenu={this.handleToggleMenu}
        isOpen={this.state.navOpen}
        location={this.props.location}
      />
      <header className={classes}>
        <div className="formidableHeader-container">
          <div className="formidableHeader-logos">
            {this.props.logoProject}
            <div className="formidableHeader-logos-oss">
              <span className="formidableHeader-by">by</span>
              <a
                href="https://formidable.com/open-source/"
                target="_blank"
                style={{ display: "flex", height: "inherit" }}
                dangerouslySetInnerHTML={{ __html: LOGO_OSS }}
              />
            </div>
          </div>
          {this.props.children}
        </div>
      </header>
      </div>
    );
  }
}

Header.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  logoProject: React.PropTypes.node,
  theme: React.PropTypes.oneOf(["light", "dark"])
};

const defaultHeaderChildren = (
  <div className="default">
    <a
      href="https://twitter.com/FormidableLabs"
      dangerouslySetInnerHTML={{ __html: LOGO_TWITTER }}
    />
    <a
      href="https://github.com/FormidableLabs/"
      dangerouslySetInnerHTML={{ __html: LOGO_GITHUB }}
    />
  </div>
);

Header.defaultProps = {
  children: defaultHeaderChildren,
  className: "",
  logoProject: "",
  theme: "dark",
  location: {pathname: '/open-source/'}
};

export default Header;
