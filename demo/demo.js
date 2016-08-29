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
        // backgroundColor: "OldLace"
        backgroundColor: "#ccc"
      }
    };
  }
  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.demo}>
        <Header theme="dark">
          <div
            className="default" /* This default class will match the Formidable brand */
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
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(Radium(Demo)), //eslint-disable-line new-cap
  document.getElementById("content")
);
