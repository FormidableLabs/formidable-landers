import React from "react";

// Assets
import LOGO_GITHUB from "../assets/logo-github.svg";
import LOGO_TWITTER from "../assets/logo-twitter.svg";
import "../styles/header.css";
import formidableStyles from "../styles/formidable-header.css"; // eslint-disable-line no-unused-vars

// Formidable.com Header
import FormidableHeader from "../partials/formidable-header";
import BodyClassName from "../partials/body-class-name";


class Header extends React.Component {
  constructor(props) {
    super(props);
    // Fade in the very first page after load.
    this.state = {
      navOpen: false
    };
  }

  /* eslint-disable no-invalid-this */
  handleToggleMenu = navOpen => {
    this.setState({
      navOpen
    });
  };
  /*eslint-enable no-invalid-this */

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
        <BodyClassName className={this.state.navOpen ? "js-menu--is-open" : ""} />
        <FormidableHeader 
          onToggleMenu={this.handleToggleMenu}
          isOpen={this.state.navOpen}
          location={this.props.location}
        />
        {
          this.props.subheader ? 
          (
            <header className={classes}>
            <div className="formidableHeader-container">
              <div className="formidableHeader-logos">
                {this.props.logoProject}
              </div>
              {this.props.children}
            </div>
            </header>
            
          ) : (
            ""
          )
        }
      
      </div>
    );
  }
}

Header.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  logoProject: React.PropTypes.node,
  theme: React.PropTypes.oneOf(["light", "dark"]),
  location: React.PropTypes.object,
  subheader: React.PropTypes.bool
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
  location: {pathname: '/open-source/'},
  subheader: true
};

export default Header;
