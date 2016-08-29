import React from "react";
import Radium, { Style } from "radium";
import { merge } from "lodash";

// Asset
import LOGO_OSS from "../assets/logo-oss.svg";

class Header extends React.Component {
  getStyles() {
    return {
      base: {
        // Lipstick
        fontFamily: "inherit",
        fontSize: "inherit",
        // Structure
        alignItems: "center",
        display: "flex",
        flex: "none",  // Sticky footer setup
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: 0,
        padding: this.props.padding
      },
      dark: {
        // Dark Theme
        background: `#242121 linear-gradient(to bottom, rgba(10,9,9,0) 85%, rgba(10,9,9,0.75) 100%)` //eslint-disable-line
      },
      light: {
        // Light Theme
        background: "#ffffff"
      },
      style: this.props.style
    };
  }

  getClassStyles(theme) {
    const base = {
      "a:link": {
        textDecoration: "none",
        transition: "color 250ms ease-in, fill 300ms ease-in"
      },
      "a:visited": {
      },
      "a:hover, a:focus": {
        transition: "color 400ms ease-out, fill 500ms ease-out"
      },
      ".default": {
        marginTop: "16px", /* Align baseline of logo with baseline of link text */
        fontFamily: `"akkurta", "Inconsolata", monospace`,
        fontSize: "13px",
        letterSpacing: "0.15em",
        textTransform: "uppercase"
      },
      ".default *": {
        marginLeft: "2em"
      }
    };
    const dark = {
      "a:link": {
        color: "#fff",
        fill: "#fff"
      },
      "a:visited": {
        color: "#e7e5e3",
        fill: "#e7e5e3"
      },
      "a:hover, a:focus": {
        color: "#e58c7d",
        fill: "#c43a31"
      }
    };
    const light = {
      "a:link": {
        color: "#242121",
        fill: "#242121"
      },
      "a:visited": {
        color: "#242121",
        fill: "#242121"
      },
      "a:hover, a:focus": {
        color: "#c43a31",
        fill: "#c43a31"
      }
    };

    if (theme === "light") {
      return merge(base, light);
    }
    return merge(base, dark);
  }

  render() {
    const styles = this.getStyles();
    const classStyles = this.getClassStyles(this.props.theme);
    return (
      <header
        className="formidable-header"
        style={[
          styles.base,
          this.props.style && styles.style,
          this.props.theme && styles[this.props.theme]
        ]}>
        <Style
          scopeSelector=".formidable-header"
          rules={classStyles}
        />
        <div
          style={{
            height: "50px",
            marginRight: "auto"
          }}
        >
          <a
            href="https://formidable.com/open-source/"
            target="_blank"
            style={{ display: "flex" }}
            dangerouslySetInnerHTML={{ __html: LOGO_OSS }}
          />
        </div>
        {this.props.children}
      </header>
    );
  }
}

Header.propTypes = {
  children: React.PropTypes.node,
  theme: React.PropTypes.oneOf(["light", "dark"]),
  padding: React.PropTypes.string
};

const defaultHeaderChildren =
  <div className="default">
    <a href="https://twitter.com/FormidableLabs">Twitter</a>
    <a href="https://github.com/FormidableLabs/">Github</a>
  </div>;

Header.defaultProps = {
  children: defaultHeaderChildren,
  theme: "dark",
  padding: "1.5rem 0"
};

export default Radium(Header); //eslint-disable-line new-cap
