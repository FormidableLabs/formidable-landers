import React from "react";
import Radium, { Style } from "radium";
import { merge } from "lodash";

// Assets
import LOGO from "../assets/logo.svg";

class Footer extends React.Component {
  getStyles() {
    return {
      base: {
        // Lipstick
        fontFamily: "inherit",
        fontSize: "inherit",
        // Structure
        alignItems: "center",
        display: "flex",
        flex: "none", // Sticky footer setup
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "2rem 0 0 0",
        padding: this.props.padding
      },
      dark: {
        // Dark Theme
        background: `#242121 linear-gradient(to top, rgba(10,9,9,0) 85%, rgba(10,9,9,0.75) 100%)`, //eslint-disable-line
        color: "#d1cecd"
      },
      light: {
        // Light Theme
        background: "#ffffff",
        color: "#242121"
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
        marginRight: "2em"
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
      <footer
        className="formidable-footer"
        style={[
          styles.base,
          this.props.style && styles.style,
          this.props.theme && styles[this.props.theme]
        ]}>
        <Style
          scopeSelector=".formidable-footer"
          rules={classStyles}
        />
        {this.props.children}

        <div
          style={{
            height: "50px",
            margin: "0 0 0 auto"
          }}
        >
          <a
            href="http://formidable.com/"
            style={{ display: "flex" }}
            target="_blank"
            dangerouslySetInnerHTML={{ __html: LOGO }}
          />
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  children: React.PropTypes.node,
  padding: React.PropTypes.string,
  style: React.PropTypes.object,
  theme: React.PropTypes.oneOf(["light", "dark"])
};

const defaultFooterChildren =
  <div className="default">
    <a href="http://formidable.com/careers/">Hire</a>
    <a href="http://formidable.com/careers/">Careers</a>
    <a href="https://twitter.com/FormidableLabs">Twitter</a>
    <a href="https://github.com/FormidableLabs/">Github</a>
  </div>;

Footer.defaultProps = {
  children: defaultFooterChildren,
  padding: "5rem 0",
  style: null,
  theme: "dark"
};

export default Radium(Footer); //eslint-disable-line new-cap
