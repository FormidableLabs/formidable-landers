/*global document:false*/
import React from "react";
import ReactDOM from "react-dom";
import Radium from "radium";
require("normalize.css");

import { Header, Footer } from "../src/index";

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
      }
    };
  }
  render() {
    const styles = this.getStyles();
    // The `.default` class will match the Formidable branding.
    const trademark = <div className="default">Formidable Labs, Inc. has several trademarks.</div>;
    return (
      <div style={styles.demo}>
        <Header containerStyle={{margin: "0 auto", maxWidth: "640px"}} padding="2px" />
        <Header theme="dark">
          <div
            className="default" /* This default class will match the Formidable branding. */
          >
            <a href="/">Project X</a>
            <a href="//formidable.com/about">About</a>
            <a href="#">Docs</a>
            <a href="//github.com/FormidableLabs/">Github</a>
          </div>
        </Header>
        <main style={{flex: 1}}>
          <h1>Project X</h1>
          <p>Content</p>
        </main>
        <Footer theme="light" />
        <Footer theme="light" trademark={trademark} />
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(Radium(Demo)), //eslint-disable-line new-cap
  document.getElementById("content")
);
