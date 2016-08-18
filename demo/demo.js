/*global document:false*/
import React from "react";
import ReactDOM from "react-dom";

import { Header, Footer } from "../src/index";

class Demo extends React.Component {
  render() {
    return (
      <div className="demo">
        <Header />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Demo/>, document.getElementById("content"));
