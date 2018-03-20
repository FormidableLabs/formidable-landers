import React from "react";

// Assets
import LOGO_OSS from "../assets/logo-oss.svg";
import LOGO_GITHUB from "../assets/logo-github.svg";
import LOGO_TWITTER from "../assets/logo-twitter.svg";
import styles from "../styles/components/header.css"; // eslint-disable-line no-unused-vars

class Header extends React.Component {
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
  theme: "dark"
};

export default Header;
