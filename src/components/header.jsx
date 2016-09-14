import React from "react";
import Radium, { Style } from "radium";
import { merge } from "lodash";

// Asset
import LOGO_OSS from "../assets/logo-oss.svg";
import BG from "../assets/bg.jpg";
import BG_SM from "../assets/bg_sm.jpg";

class Header extends React.Component {
  getStyles() {
    const styleBg = this.props.style && this.props.style.background ?
      this.props.style.background :
      `linear-gradient(to bottom, rgba(10,9,9,0) 85%, rgba(10,9,9,0.75) 100%), #242121 url(${BG}) center right repeat`; //eslint-disable-line max-len
    return {
      base: {
        margin: 0
      },
      container: {
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
        padding: this.props.padding
      },
      dark: {
        // Dark Theme
        background: `linear-gradient(to bottom, rgba(10,9,9,0) 85%, rgba(10,9,9,0.75) 100%),
          #242121 url(${BG_SM}) center right repeat`,
        color: "#898685",
        "@media only screen and (min-width: 800px)": {
          background: styleBg
        }
      },
      light: {
        // Light Theme
        background: "#ffffff",
        color: "#242121"
      },
      style: this.props.style,
      styleContainer: this.props.styleContainer,
      styleLogos: this.props.styleLogos,
      styleBy: this.props.styleBy
    };
  }

  getClassStyles(theme) {
    const base = {
      "svg": {
        fill: "currentColor"
      },
      "a:link": {
        textDecoration: "none",
        transition: "color 250ms ease-in, fill 300ms ease-in"
      },
      "a:visited": { /* Necessary to retain link order in <Style /> */
      },
      "a:hover, a:focus": {
        transition: "color 400ms ease-out, fill 500ms ease-out"
      },
      ".default": {
        marginBottom: "20px", /* Align baseline of Project with baseline of links */
        fontFamily: `"akkurat", "Inconsolata", monospace`,
        fontSize: "13px",
        letterSpacing: "0.15em",
        lineHeight: 2,
        textTransform: "uppercase"
      },
      ".default *": {
        display: "inline-block",
        marginLeft: "2em"
      },
      ".formidableHeader-logos": {
        margin: "0 auto 0 0"
      },
      ".formidableHeader-logos-oss": {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        height: "30px",
        overflow: "hidden"
      },
      ".formidableHeader-logos-oss-by": {
        marginTop: "3px",
        marginRight: "0.5em",
        fontFamily: `"akkurat", "Inconsolata", monospace`,
        fontSize: "14px",
        fontWeight: "normal",
        lineHeight: 1
      }
    };
    const dark = {
      "a:link": {
        color: "#fff"
      },
      "a:visited": {
        color: "#e7e5e3"
      },
      "a:hover, a:focus": {
        color: "#dc7a6b"
      }
    };
    const light = {
      "a:link": {
        color: "#242121"
      },
      "a:visited": {
        color: "#242121"
      },
      "a:hover, a:focus": {
        color: "#c43a31"
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
        className="formidableHeader"
        style={[
          styles.base,
          this.props.theme && styles[this.props.theme],
          this.props.style && styles.style
        ]}>
        <Style
          scopeSelector=".formidableHeader"
          rules={classStyles}
        />
        <div
          className="formidableHeader-container"
          style={[
            styles.container,
            this.props.styleContainer && styles.styleContainer
          ]}
        >
          <div
            className="formidableHeader-logos"
            style={this.props.styleLogos && styles.styleLogos}
          >
            {this.props.logoProject}
            <div className="formidableHeader-logos-oss">
              <span
                className="formidableHeader-logos-oss-by"
                style={this.props.styleBy && styles.styleBy}
              >
                by
              </span>
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
  padding: React.PropTypes.string,
  logoProject: React.PropTypes.node,
  style: React.PropTypes.object,
  styleBy: React.PropTypes.object,
  styleContainer: React.PropTypes.object,
  styleLogos: React.PropTypes.object,
  theme: React.PropTypes.oneOf(["light", "dark"])
};

const defaultHeaderChildren =
  <div className="default">
    <a href="https://twitter.com/FormidableLabs">Twitter</a>
    <a href="https://github.com/FormidableLabs/">Github</a>
  </div>;

Header.defaultProps = {
  children: defaultHeaderChildren,
  padding: "60px 0",
  logoProject: "",
  style: null,
  styleBy: null,
  styleContainer: null,
  styleLogos: null,
  theme: "dark"
};

export default Radium(Header); //eslint-disable-line new-cap
