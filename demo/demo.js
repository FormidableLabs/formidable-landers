/*global document:false*/
import React from "react";
import ReactDOM from "react-dom";
import Radium, { StyleRoot } from "radium";
require("normalize.css");

import { Header, Footer } from "../src/index";
import ProjectXLogo from "./logo-project-x.svg";

class Demo extends React.Component {
  getStyles() {
    return {
      demo: {
        // Styles for Sticky Footer
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        // Lipstick Styles for Demo
        backgroundColor: "#ccc"
      },
      demoHeading: {
        fontFamily: "sharp",
        fontSize: "60px",
        fontWeight: "normal",
        lineHeight: 1.2,
        margin: 0
      }
    };
  }
  render() {
    const styles = this.getStyles();
    // The `.default` class will match the Formidable branding.
    const trademark = <div className="default">Formidable Labs, Inc. has several trademarks.</div>;

    const projectTextLogo =
      <a href="/" style={styles.demoHeading}>
        Project
      </a>;

    const projectSVGLogo =
      <a
        href="/"
        style={{display: "block", height: "50px"}}
        title="Project X"
        dangerouslySetInnerHTML={{__html: ProjectXLogo}}
      />;

    return (
      <StyleRoot>
        <div style={styles.demo}>
          <Header
            theme="dark"
            logoProject={projectTextLogo}
            padding="60px"
            styleBy={{ textIndent: "2px" }}
            styleContainer={{ margin: "0 auto", maxWidth: "640px" }}
          />
          <Header
            theme="dark"
            logoProject={projectSVGLogo}
            style={{
              background: "#c43a31",
              "@media only screen and (min-width: 800px)": {
                background: "#cd5244"
              }
            }}
            styleBy={{ textIndent: "12px", color: "#fff" }}
          >
            <div className="default"> {/* This default class will match the Formidable branding */}
              <a href="#about">About</a>
              <a href="#">Docs</a>
              <a href="#">Issues</a>
              <a href="#">Github</a>
            </div>
          </Header>
          <main style={{flex: 1}}>
            <h1>Project X</h1>
            <p>Content</p>
          </main>
          <Footer theme="light" />
          <Footer theme="light" trademark={trademark} />
        </div>
      </StyleRoot>
    );
  }
}

ReactDOM.render(
  React.createElement(Radium(Demo)), //eslint-disable-line new-cap
  document.getElementById("content")
);
